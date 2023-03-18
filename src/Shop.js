import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("http://localhost:5000/api/test")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Shop Page</h1>
      <h1>Test API Endpoint</h1>
      <ul>
        {data.map((item) => (
        <Link to={`/shop/${item.id}`}>
          <li key={item.id}>{item.name}</li>
        </Link>
        ))}
      </ul>
    </div>
  );
}
