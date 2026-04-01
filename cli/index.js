#!/usr/bin/env node

import React from 'react';
import { render, Box, Text, useInput, useApp } from 'ink';
import SelectInput from 'ink-select-input';
import TextInput from 'ink-text-input';
import pc from 'picocolors';
import clipboardy from 'clipboardy';
import Fuse from 'fuse.js';
import { loadPromptIndex, loadPromptContent } from './data.js';

const { useState, useEffect, useMemo } = React;

const SelectInputComponent = SelectInput.default || SelectInput;
const TextInputComponent = TextInput.default || TextInput;

const App = () => {
  const [allPrompts, setAllPrompts] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [activeMode, setActiveMode] = useState('list');
  const [currentVariableIndex, setCurrentVariableIndex] = useState(0);
  const [variableValues, setVariableValues] = useState({});
  const [previewScrollOffset, setPreviewScrollOffset] = useState(0);
  const [copyStatus, setCopyStatus] = useState(false);
  
  const [dimensions, setDimensions] = useState({
    columns: process.stdout.columns || 80,
    rows: process.stdout.rows || 24
  });

  const { exit } = useApp();

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        columns: process.stdout.columns || 80,
        rows: process.stdout.rows || 24
      });
    };
    process.stdout.on('resize', handleResize);
    loadPromptIndex().then(data => {
      setAllPrompts(data);
      setLoading(false);
    });
    return () => process.stdout.off('resize', handleResize);
  }, []);

  const fuse = useMemo(() => new Fuse(allPrompts, {
    keys: ['title', 'category', 'tags'],
    threshold: 0.3
  }), [allPrompts]);

  const filteredPrompts = useMemo(() => {
    if (!searchTerm) return allPrompts;
    return fuse.search(searchTerm).map(r => r.item);
  }, [searchTerm, allPrompts]);

  useEffect(() => {
    const p = filteredPrompts[selectedIndex];
    if (p) {
      loadPromptContent(p.filename).then(content => {
        setCurrentContent(content);
        setPreviewScrollOffset(0);
      });
    } else {
      setCurrentContent(null);
    }
  }, [selectedIndex, filteredPrompts]);

  useInput((input, key) => {
    if (activeMode === 'list') {
      if (!isSearching) {
        if (input === 'q') exit();
        if (input === '/') { setIsSearching(true); setSelectedIndex(0); }
        if (input === 'c' && currentContent) {
          const p = filteredPrompts[selectedIndex];
          let text = currentContent.body;
          currentContent.variables.forEach(v => {
            const val = variableValues[p.title]?.[v] || `{{${v}}}`;
            text = text.replaceAll(`{{${v}}}`, val);
          });
          clipboardy.writeSync(text);
          setCopyStatus(true);
          setTimeout(() => setCopyStatus(false), 1500); // 1.5s flash
        }
      }
      if (key.escape) { setIsSearching(false); setSearchTerm(''); }
      if (key.pageUp) setPreviewScrollOffset(prev => Math.max(0, prev - 5));
      if (key.pageDown) setPreviewScrollOffset(prev => prev + 5);
      if (input === 'e' || (input === '\r' && !isSearching)) {
        if (currentContent?.variables?.length > 0) {
          setActiveMode('editing');
          setCurrentVariableIndex(0);
        }
      }
    } else if (activeMode === 'editing') {
      if (key.escape) setActiveMode('list');
    }
  });

  if (loading) return React.createElement(Box, { padding: 1 }, React.createElement(Text, null, 'Initializing explorer...'));

  const selectedTitleData = filteredPrompts[selectedIndex] || {};
  
  // Heights layout management
  const editorHeight = activeMode === 'editing' ? 6 : 4;
  const variableSummaryHeight = currentContent?.variables?.length > 0 ? (Math.min(currentContent.variables.length, 3) + 2) : 0;
  const metadataHeight = 4;
  const headerSearchHeight = 5;
  const footerHeight = 2;
  const bodyHeaderHeight = 3;
  const previewAreaHeight = Math.max(3, dimensions.rows - headerSearchHeight - metadataHeight - variableSummaryHeight - editorHeight - bodyHeaderHeight - footerHeight);

  const renderScrollableContent = () => {
    if (!currentContent) return [React.createElement(Text, { key: 'l', dimColor: true }, 'Fetching body...')];
    let fullText = currentContent.body;
    currentContent.variables.forEach(v => {
      const val = variableValues[selectedTitleData.title]?.[v];
      if (val) fullText = fullText.replaceAll(`{{${v}}}`, val);
    });
    const wrappedLines = [];
    const maxLineLength = Math.floor(dimensions.columns * 0.60);
    fullText.split('\n').forEach(line => {
      if (line.length <= maxLineLength) wrappedLines.push(line);
      else {
        let cur = '';
        line.split(' ').forEach(w => {
          if ((cur + w).length < maxLineLength) cur += (cur ? ' ' : '') + w;
          else { wrappedLines.push(cur); cur = w; }
        });
        if (cur) wrappedLines.push(cur);
      }
    });
    return wrappedLines.slice(previewScrollOffset, previewScrollOffset + previewAreaHeight).map((l, i) => React.createElement(Text, { key: i, color: 'white' }, l || ' '));
  };

  const TopMenu = () => (
    React.createElement(Box, { width: '100%', paddingX: 1, backgroundColor: copyStatus ? 'green' : 'white', justifyContent: 'space-between' },
      React.createElement(Box, null,
        React.createElement(Text, { color: copyStatus ? 'white' : 'black', bold: true }, copyStatus ? ' ✅ COPIED TO CLIPBOARD ' : '🚀 PROMPT EXPLORER '),
        !copyStatus && React.createElement(Text, { color: 'gray' }, ` [ ${filteredPrompts.length}/${allPrompts.length} ]`)),
      React.createElement(Box, null,
        React.createElement(Text, { color: 'black', bold: true, backgroundColor: copyStatus ? 'white' : 'cyan' }, ' [ C ] COPY '),
        React.createElement(Box, { marginLeft: 2 }),
        React.createElement(Text, { color: 'white', bold: true, backgroundColor: 'magenta' }, ' [ / ] SEARCH '),
        React.createElement(Box, { marginLeft: 2 }),
        React.createElement(Text, { color: 'white', bold: true, backgroundColor: 'red' }, ' [ Q ] EXIT ')))
  );

  return React.createElement(Box, { flexDirection: 'column', width: dimensions.columns, height: dimensions.rows },
    React.createElement(TopMenu, null),
    React.createElement(Box, { paddingX: 1, borderStyle: 'single', borderColor: isSearching ? 'yellow' : 'gray', height: 3, flexShrink: 0 },
      React.createElement(Text, { color: isSearching ? 'yellow' : 'gray' }, 'SEARCH: '),
      React.createElement(TextInputComponent, { value: searchTerm, onChange: (v) => { setSearchTerm(v); setSelectedIndex(0); }, focus: isSearching, onSubmit: () => setIsSearching(false) })),
    React.createElement(Box, { flexGrow: 1, flexDirection: 'row' },
      React.createElement(Box, { flexDirection: 'column', width: '30%', borderStyle: 'round', borderColor: 'cyan', padding: 1 },
        React.createElement(Text, { bold: true, color: 'white' }, 'BROWSE'),
        React.createElement(Box, { marginTop: 1, flexGrow: 1 },
          React.createElement(SelectInputComponent, {
            items: filteredPrompts.map((p, index) => ({ label: p.title, value: index })),
            onHighlight: (item) => setSelectedIndex(item.value),
            limit: Math.max(1, dimensions.rows - 12),
            indicatorComponent: ({ isSelected }) => React.createElement(Text, { color: isSelected ? 'cyan' : 'black' }, isSelected ? '❯ ' : '  '),
            itemComponent: ({ isSelected, label }) => React.createElement(Text, { color: isSelected ? 'cyan' : 'white' }, label)
          })
        )),
      React.createElement(Box, { flexDirection: 'column', flexGrow: 1, borderStyle: 'round', borderColor: copyStatus ? 'green' : 'magenta', padding: 1, overflowX: 'hidden' },
        React.createElement(Box, { marginBottom: 1, flexDirection: 'column', flexShrink: 0 },
          React.createElement(Box, null, React.createElement(Text, { color: 'magenta', bold: true }, 'CATEGORY: '), React.createElement(Text, { color: 'magenta' }, (selectedTitleData.category || '').toUpperCase())),
          React.createElement(Box, null, React.createElement(Text, { color: 'white', bold: true }, 'TITLE:    '), React.createElement(Text, { color: 'white', underline: true }, (selectedTitleData.title || '')))),
        currentContent?.variables?.length > 0 && React.createElement(Box, { flexDirection: 'column', marginY: 0, borderStyle: 'single', borderColor: 'yellow', paddingX: 1, flexShrink: 0 },
          React.createElement(Text, { color: 'yellow', bold: true }, 'PLACEHOLDERS:'),
          currentContent.variables.slice(0, 3).map(v => 
            React.createElement(Text, { key: v, color: variableValues[selectedTitleData.title]?.[v] ? 'green' : 'gray' }, `  - {{${v}}}: ${variableValues[selectedTitleData.title]?.[v] || '(empty)'}`)
          )),
        React.createElement(Box, { marginTop: 1, marginBottom: 1, borderStyle: 'single', paddingX: 1, borderColor: 'gray', justifyContent: 'space-between', flexShrink: 0 },
          React.createElement(Text, { color: 'gray' }, 'PREVIEW BODY'),
          React.createElement(Text, { color: 'cyan' }, `Scroll: [${previewScrollOffset}]`)),
        React.createElement(Box, { flexGrow: 1, flexDirection: 'column', height: previewAreaHeight }, renderScrollableContent()),
        activeMode === 'editing' ? React.createElement(Box, { flexDirection: 'column', height: 5, marginTop: 1, borderStyle: 'double', borderColor: 'yellow', paddingX: 1, flexShrink: 0 },
           React.createElement(Text, { color: 'yellow', bold: true }, `Editing: {{${currentContent.variables[currentVariableIndex]}}}`),
           React.createElement(Box, null, React.createElement(Text, null, '> '),
             React.createElement(TextInputComponent, {
               value: variableValues[selectedTitleData.title]?.[currentContent.variables[currentVariableIndex]] || '',
               focus: true,
               onChange: (val) => setVariableValues(prev => ({ ...prev, [selectedTitleData.title]: { ...prev[selectedTitleData.title], [currentContent.variables[currentVariableIndex]]: val } })),
               onSubmit: () => { if (currentVariableIndex < currentContent.variables.length - 1) setCurrentVariableIndex(prev => prev + 1); else setActiveMode('list'); }
             }))
        ) : React.createElement(Box, { marginTop: 1, height: 1, justifyContent: 'space-between', flexShrink: 0 },
          React.createElement(Text, { dimColor: true }, `PgDn/Up: Scroll | Q: Quit`),
          React.createElement(Text, { color: 'yellow' }, currentContent?.variables?.length ? 'Enter: Fill Vars' : ''))
      )),
    React.createElement(Box, { paddingX: 1, height: 1, flexShrink: 0 }, React.createElement(Text, { dimColor: true, color: 'cyan' }, `@fazleyrabbi`))
  );
};

render(React.createElement(App, null));
