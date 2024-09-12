# Todo react App with Context API & local storage usage

React, Context API for global state management of the todo items & related functions, ts usage, tailwind css.

1. Purpose: A Todo application that allows users to add, edit, delete, and toggle the completion status of tasks.

2. React and TypeScript:

   - Functional components and hooks (useState, useEffect)
   - TypeScript usage with interfaces (ITodo, ITodoContext)
   - Types for props, state, and event handlers

3. Context API:

   - Implemented a global state management solution using React Context
   - Separated context definition (TodoContext.ts) from implementation (App.tsx)
   - A custom hook (useTodoContext) for simplifying context consumption

4. Features:

   - CRUD operations for todos
   - Local storage persistence
   - Confirmation dialog for delete action

5. App Structure:

   - Organized code : components (TodoForm, TodoItem)
   - Separate directories for types, contexts, and components
   - index files for cleaner imports

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
