import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import RootLayout from "./layout/RootLayout.tsx";
import Home from "./pages/Home.tsx";
import OnlyPublicRoutes from "./utilities/router/OnlyPublicRoutes.tsx";
import Signin from "./pages/Signin.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="/user" element={<OnlyPublicRoutes fallbackUrl="/" />}>
        <Route path="signin" element={<Signin />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
