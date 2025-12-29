// 3️⃣ ROUTING (10,000 SHOPS SUPPORT)
// src/router.jsx

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Search from "./pages/Search";


export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search />},
  { path: "/shop/:shopId", element: <Shop /> }
]);
