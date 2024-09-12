# Theme switcher in vite react app

Demonstrating the approach of using the Context API for state management and Tailwind CSS for flexible, theme-aware styling.

1. Theme Switching:

   - The app allows users to toggle between light and dark themes.
   - It uses Tailwind CSS classes for styling, which include dark mode variants.

2. React Context API:

   - The `ThemeContext` is created to manage the theme state globally.
   - `ThemeProvider` wraps the entire app, making theme-related functions and state available to all components.
   - `useTheme` hook is created for easy access to theme context in child components.

3. Tailwind CSS Integration:

   - Tailwind classes are used extensively for styling components.
   - Dark mode classes are applied conditionally based on the current theme.

4. Components:

   - `ThemeBtn`: A toggle switch for changing the theme.
   - `Card`: A sample component that demonstrates theme-aware styling.

5. State Management:

   - `useState` in `App.tsx` manages the current theme state.
   - `useEffect` in `App.tsx` updates the HTML class when the theme changes.

6. Learning Objectives:
   - React Hooks: Usage of `useState`, `useEffect`, and custom hooks.
   - Context API: Global state management for theme across components.
   - Tailwind CSS: Utility-first CSS framework for responsive design.
   - Dark Mode: Implementation of a theme switcher with Tailwind.
   - Component Composition: Creating reusable components (Card, ThemeBtn).

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
