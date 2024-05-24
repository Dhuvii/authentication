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
import Register from "./pages/Register.tsx";
import PrivateRoutes from "./utilities/router/PrivateRoute.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<PrivateRoutes fallbackUrl="user/signin" />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/user" element={<OnlyPublicRoutes fallbackUrl="/" />}>
        <Route path="signin" element={<Signin />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
