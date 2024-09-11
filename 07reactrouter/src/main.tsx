import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import { Home, About, Contact, User, Github } from "./components/index.tsx";
import githubInfoLoader from "./customHooks/useGithubInfoLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="github"
        element={<Github />}
        loader={() => githubInfoLoader()} //"IMxSuhasTheBoy"
      />
      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route path="*" element={<div>Page Not Found</div>} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

/*
  ( / )
    ( / )
    ( /about )
    ( /contact )
    ( /github )
    ( /user )
      ( /user/heyYou )
  ( / )
*/

/* 
experiment

  <Route
    path="github/:githubUserNam"
    element={<Github />}
    loader={({ params }) => githubInfoLoader(params.githubUserName)}
  />

*/
