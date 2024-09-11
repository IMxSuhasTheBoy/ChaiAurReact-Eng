# React, React Router DOM

[React Router](https://reactrouter.com/en/main/start/concepts)

**Single Page Application (SPA) brief explanation of the project:**

1. React and SPA: The project is built using React, demonstrating the creation of a single-page application where different views are rendered without full page reloads.

2. React Router DOM: The project extensively uses React Router DOM for handling navigation and routing within the application. This is evident in the `main.tsx` file where routes are defined using `createBrowserRouter` and `createRoutesFromElements`.

3. Component Structure: The application is structured with multiple components (Home, About, Contact, User, Github) that represent different pages or views.

4. Hooks: Various React hooks are used throughout the project, such as:

   - `useParams` in the User component to access route parameters
   - `useLoaderData` in the Github component to fetch and display data
   - Custom hooks like `githubInfoLoader` for data fetching

5. Layout: A common layout (Header and Footer) is maintained across different routes using the `Layout` component and the `Outlet` from React Router.

6. API Integration: The Github component demonstrates how to integrate external APIs into a React application.

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
