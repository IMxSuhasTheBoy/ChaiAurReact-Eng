# 08contextApi

implementation and usage of React's Context API for global state management:

1. Context Creation:

   - A `UserContext` is created using `createContext()` to store and share user data.

2. Context Provider:

   - `UserContextProvider` component manages the user state and provides it to child components.
   - It uses `useState` to manage the user object and provides both the state and setter function to consumers.

3. Context Consumption:

   - The `Login` component uses `useContext` to access the `setUser` function from `UserContext`.
   - It updates the global user state when the login form is submitted.
   - The `Profile` component uses `useContext` to access the `user` object from `UserContext`.
   - It displays the username if a user is logged in, or a default message if not.

4. App Structure:
   - The `App` component wraps `Login` and `Profile` with `UserContextProvider`, making the context available to these components.

Key learning points:

1. Creating and structuring a context using TypeScript for type safety.
2. Implementing a context provider to manage and distribute state.
3. Consuming context in functional components using the `useContext` hook.
4. Avoiding prop drilling by using context for deeply nested components.
5. Centralizing state management for better organization and easier updates.

This example showcases how Context API can be used for simple state management across components without the need for external libraries like Redux, especially useful for smaller to medium-sized applications.

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
