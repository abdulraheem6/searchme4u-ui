// 4️⃣ SHOP DATA LOADER (CDN BASED)
// src/services/shopService.js
const CDN_BASE = "https://cdn.searchme4u.com/shops";

export async function getShopConfig(shopId) {
  const res = await fetch(`${CDN_BASE}/${shopId}/config.json`);
  if (!res.ok) throw new Error("Shop not found");
  return res.json();
}