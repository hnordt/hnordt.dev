# Agent Instructions

## Path Patterns

- Use `./` for specific local file paths in config files, such as `extends: "./vite.config.ts"` or `"tailwindStylesheet": "./src/routes/layout.css"`.
- Omit `./` for glob patterns, such as `include: ["src/**/*.test.ts"]` or `exclude: ["src/lib/server/**"]`.
- In `.gitignore`, use a leading `/` for repository-root anchored paths, such as `/build` or `/node_modules`.
