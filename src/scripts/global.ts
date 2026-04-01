export function setupFavorites() {
  const favs: string[] = JSON.parse(localStorage.getItem('prompt-favorites') || '[]');
  const allFavBtns = document.querySelectorAll('.fav-btn');
  allFavBtns.forEach(btn => {
    const slug = (btn as HTMLElement).dataset.slug || '';
    if (favs.includes(slug)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  if (document.body.dataset.favDelegated) return;
  document.body.dataset.favDelegated = 'true';

  document.body.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const btn = target.closest('.fav-btn');
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();

    const slug = (btn as HTMLElement).dataset.slug || '';
    const currentFavs: string[] = JSON.parse(localStorage.getItem('prompt-favorites') || '[]');
    let isNowFav = false;

    if (currentFavs.includes(slug)) {
      const updated = currentFavs.filter(s => s !== slug);
      localStorage.setItem('prompt-favorites', JSON.stringify(updated));
      isNowFav = false;
      if (typeof (window as any).showToast === 'function') {
        (window as any).showToast('Removed from favorites', 'info');
      }
    } else {
      currentFavs.push(slug);
      localStorage.setItem('prompt-favorites', JSON.stringify(currentFavs));
      isNowFav = true;
      if (typeof (window as any).showToast === 'function') {
        (window as any).showToast('Added to favorites ♥', 'success');
      }
    }

    document.querySelectorAll(`.fav-btn[data-slug="${slug}"]`).forEach(b => {
      if (isNowFav) b.classList.add('active');
      else b.classList.remove('active');
    });

    window.dispatchEvent(new CustomEvent('favorites-changed'));
  });
}

export function setupCopyDelegation() {
  if (document.body.dataset.copyDelegated) return;
  document.body.dataset.copyDelegated = 'true';

  document.body.addEventListener('click', async (e) => {
    const target = e.target as HTMLElement;
    const btn = target.closest('.copy-btn');
    
    if (!btn) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const promptText = btn.getAttribute('data-prompt');
    if (!promptText) return;

    try {
      await navigator.clipboard.writeText(promptText);
      const promptSlug = btn.getAttribute('data-slug');
      
      const matchingBtns = document.querySelectorAll(`.copy-btn[data-slug="${promptSlug}"]`);
      matchingBtns.forEach(b => b.classList.add('copied'));
      
      if (promptSlug) {
        const usage = JSON.parse(localStorage.getItem('prompt_usage') || '{}');
        usage[promptSlug] = (usage[promptSlug] || 0) + 1;
        localStorage.setItem('prompt_usage', JSON.stringify(usage));
        window.dispatchEvent(new Event('prompt_usage_updated'));
      }

      if (typeof (window as any).showToast === 'function') {
        (window as any).showToast('Prompt copied to clipboard!', 'success');
      }
      
      setTimeout(() => {
        document.querySelectorAll(`.copy-btn[data-slug="${promptSlug}"]`).forEach(b => {
           b.classList.remove('copied');
        });
      }, 2000);
      
    } catch (err) {
      console.error("Failed to copy", err);
    }
  });
}

// Initializing
setupFavorites();
setupCopyDelegation();

// Re-initializing on page transitions (if using ViewTransitions)
document.addEventListener('astro:page-load', () => {
    setupFavorites();
    setupCopyDelegation();
});

// Also re-init on navigation if not using ViewTransitions but standard navigation happens in dynamic ways
// (Some frameworks or custom logic might need this)
window.addEventListener('popstate', setupFavorites);
