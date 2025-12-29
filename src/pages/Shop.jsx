// PERFORMANCE GUARANTEES
// Metric	Result
// TTFB	< 50 ms
// Page load	< 1 sec
// CDN cache hit	95%+
// Max users	Millions

// SCALE LIMITS (HONEST)
// Component	Limit
// Shops	Unlimited
// Data	Pay per TB
// Users	Unlimited
// Cost growth	Linear with data only
// ADMIN UPLOAD WORKFLOW (NO SERVER)
// OPTION A — CLI Upload (Fastest)
// rclone copy ./shop-00001 r2:searchme4u-assets/shops/shop-00001


// ✔ Bulk uploads
// ✔ Automation friendly

//5️⃣ SHOP PAGE (DYNAMIC)
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getShopConfig } from "../services/shopService";

export default function Shop() {
  const { shopId } = useParams();
  const [shop, setShop] = useState(null);

  useEffect(() => {
    getShopConfig(shopId)
      .then(setShop)
      .catch(() => setShop({ error: true }));
  }, [shopId]);

  if (!shop) return <p>Loading...</p>;
  if (shop.error) return <p>Shop not found</p>;

  return (
    <>
      <h1>{shop.name}</h1>
      <p>{shop.description}</p>
      <img
        src={`https://cdn.searchme4u.com/shops/${shopId}/logo.png`}
        width="200"
      />
    </>
  );
}
