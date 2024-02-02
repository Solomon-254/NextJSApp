import { useState, useEffect } from "react";
import {  CardContent, CardFooter } from "./ui/card";
import Image from "next/image";

export default function Categories() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://api.testvalley.kr/main-shortcut/all");
      const data = await response.json();
      setProducts(data); // Set the fetched products
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <p>.</p>
      ) : (
        <ul className="flex flex-row flex-wrap place-content-center">
          {products.map((product) => (
            <div className="m-4 place-content-center" key={product.mainShortcutId}> 
                <Image
                  src={product.imageUrl}
                  alt=""
                  width={60}
                  height={60}
                /> 
              <p >{product.title}</p>
            </div>
          ))}
        </ul>
      )}
    </>
  );
}
