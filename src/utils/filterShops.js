import { distanceKm } from "./distance";

export function filterShops(shops, filters) {
  return shops.filter(shop => {
    if (filters.type && shop.type !== filters.type) return false;
    if (filters.city && shop.city !== filters.city) return false;
    if (filters.area && shop.area !== filters.area) return false;
    if (filters.pincode && shop.pincode !== filters.pincode) return false;

    if (filters.radiusKm && filters.lat && filters.lng) {
      const d = distanceKm(
        filters.lat,
        filters.lng,
        shop.lat,
        shop.lng
      );
      if (d > filters.radiusKm) return false;
    }

    return true;
  });
}
