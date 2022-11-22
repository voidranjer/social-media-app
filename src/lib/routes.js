import { createBrowserRouter } from "react-router-dom";

import Login from "components/auth/Login";
import Register from "components/auth/Register";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const router = createBrowserRouter([
  { path: ROOT, element: "Public Root" },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
]);
