// SEARCH INDEX DESIGN (VERY IMPORTANT)
// 📄 shops-index.json

// Stored in Cloudflare R2

// cdn.searchme4u.com/index/shops-index.json

// Example Structure
// [
//   {
//     "id": "shop-00001",
//     "name": "Spice Hub",
//     "type": "restaurant",
//     "city": "Hyderabad",
//     "area": "Madhapur",
//     "pincode": "500081",
//     "lat": 17.4483,
//     "lng": 78.3915
//   },
//   {
//     "id": "shop-00002",
//     "name": "Metro Footwear",
//     "type": "footwear",
//     "city": "Hyderabad",
//     "area": "Gachibowli",
//     "pincode": "500032",
//     "lat": 17.4401,
//     "lng": 78.3489
//   }
// ]

// Size

// ~200 bytes per shop

// 10,000 shops ≈ ~2 MB

// Loads instantly from CDN


// HOW TO KEEP INDEX UPDATED
// Nightly Job (Simple)

// Generate shops-index.json

// Upload to R2

// CDN auto-refreshes

// No redeploy needed.

const INDEX_URL = "https://cdn.searchme4u.com/index/shops-index.json";

let cachedIndex = null;

export async function loadShopIndex() {
  if (cachedIndex) return cachedIndex;

  const res = await fetch(INDEX_URL);
  if (!res.ok) throw new Error("Failed to load index");

  cachedIndex = await res.json();
  return cachedIndex;
}



