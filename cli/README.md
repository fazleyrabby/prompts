# @fazleyrabbi/prompts CLI

A modern, high-performance command-line tool for searching and customized copy-pasting of AI prompts from the fazleyrabbi library.

## Installation

```bash
npm install -g @fazleyrabbi/prompts
```

Or just run it once using `npx`:

```bash
npx @fazleyrabbi/prompts
```

## Usage

1. Run the command: `prompts` (if installed globally) or `npx @fazleyrabbi/prompts`
2. **Search:** Use fuzzy search to find your prompt.
3. **Customize:** If the prompt has variables like `{{FRAMEWORK}}`, the CLI will ask you for values on the fly.
4. **Copy:** Once finished, it copies the final prompt directly to your clipboard!

## Development

If you want to test locally:

```bash
cd cli
npm link
prompts
```
