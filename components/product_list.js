import { useState, useEffect } from "react";

import { FaStar } from "react-icons/fa";
import Image from "next/image";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://api.testvalley.kr/collections?prearrangedDiscount"
      );
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
        <div className="flex flex-row flex-none place-content-center">
          <div className="flex flex-row flex-wrap w-1/2">
            {products["items"].map((item) => (
              <div key={item.id}>
                {/* <p>{item.description}</p> */}
                {item.thumbnail && item.thumbnail.uri && (
                  <Image
                    className="mx-2 mt-2"
                    src={item.thumbnail.uri}
                    alt={item.title}
                    width={200}
                    height={200}
                  />
                )}
                <h2>{item.title}</h2>
                <h3>{item.code}</h3>
                <div className="flex flex-row ">
                  {" "}
                  <FaStar /> {item.rating}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
