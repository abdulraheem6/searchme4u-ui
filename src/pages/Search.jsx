import { useEffect, useState } from "react";
import { loadShopIndex } from "../services/searchService";
import { filterShops } from "../utils/filterShops";

export default function Search() {
  const [shops, setShops] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [filters, setFilters] = useState({
    type: "",
    city: "",
    area: "",
    pincode: ""
  });

  useEffect(() => {
    loadShopIndex().then(data => {
      setShops(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    setFiltered(filterShops(shops, filters));
  }, [filters, shops]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Find Shops</h2>

      {/* FILTERS */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <select onChange={e => setFilters(f => ({ ...f, type: e.target.value }))}>
          <option value="">All Types</option>
          <option value="restaurant">Restaurant</option>
          <option value="footwear">Footwear</option>
        </select>

        <input
          placeholder="City"
          onChange={e => setFilters(f => ({ ...f, city: e.target.value }))}
        />

        <input
          placeholder="Area"
          onChange={e => setFilters(f => ({ ...f, area: e.target.value }))}
        />

        <input
          placeholder="Pincode"
          onChange={e => setFilters(f => ({ ...f, pincode: e.target.value }))}
        />
      </div>

      {/* RESULTS */}
      <p>Results: {filtered.length}</p>

      <ul>
        {filtered.slice(0, 50).map(shop => (
          <li key={shop.id}>
            <strong>{shop.name}</strong> — {shop.area}, {shop.city}
            <br />
            <a href={`/shop/${shop.id}`}>View Shop</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
