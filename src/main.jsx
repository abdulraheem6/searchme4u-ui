// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// 1️⃣ Create sample React repo
// 2️⃣ Create Cloudflare Worker (signed URLs)
// 3️⃣ Build Admin Dashboard UI
// 4️⃣ Add search & filters
// 5️⃣ Add ads / monetization


// 8️⃣ TEST URLS
// https://searchme4u.com/shop/shop-00001
// https://searchme4u.com/shop/shop-05000
// https://searchme4u.com/shop/shop-10000


// ✔ All served from CDN
// ✔ Same React app
// ✔ Unlimited scale
// 1️⃣ PROJECT STRUCTURE (FINAL)
// searchme4u-ui/
// ├── public/
// │   └── index.html
// ├── src/
// │   ├── pages/
// │   │   ├── Home.jsx
// │   │   └── Shop.jsx
// │   ├── components/
// │   │   ├── Header.jsx
// │   │   └── ShopCard.jsx
// │   ├── services/
// │   │   └── shopService.js
// │   ├── router.jsx
// │   ├── App.jsx
// │   └── main.jsx
// ├── package.json
// └── vite.config.js

//npm create vite@latest searchme4u-ui -- --template react
//cd searchme4u-ui
//npm install
//npm install react-router-dom
// 7️⃣ BUILD & DEPLOY (Cloudflare Pages)
// npm run build

// Cloudflare Pages Settings
// Field	Value
// Framework	React
// Build Command	npm run build
// Output Dir	dist

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
