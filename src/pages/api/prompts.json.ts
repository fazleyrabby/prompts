import { getCollection } from 'astro:content';

export const GET = async () => {
  try {
    const allPrompts = await getCollection('prompts');
    
    const formattedPrompts = allPrompts.map(prompt => {
      // Extract prompt content without the headers
      const promptText = prompt.body
        .replace(/## Prompt\s+/, '')
        .split('## Notes')[0]
        .trim();

      return {
        title: prompt.data.title,
        description: prompt.data.description,
        category: prompt.data.category,
        tags: prompt.data.tags,
        model: prompt.data.model,
        slug: prompt.slug,
        promptText,
        // Variables extraction for tools requiring arguments
        variables: [...promptText.matchAll(/\{\{([A-Z0-9_]+)\}\}/g)]
          .map(match => match[1])
          .filter((v, i, a) => a.indexOf(v) === i) // Unique variables
      };
    });

    return new Response(JSON.stringify(formattedPrompts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // Enable CORS for external API usage
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to generate prompts API' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
