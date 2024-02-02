import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function ImageCarousel() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://api.testvalley.kr/main-banner/all");
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
        <div className="flex flex-row flex-wrap place-content-center">
          <p>Loading...</p>
        </div>
      ) : (
        <Carousel
          key={products.id}
          className="flex h-72 w-fit"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-1 md:basis-1/2 lg:basis-1/1"
              >
                <Image
                  src={product.pcImageUrl}
                  alt=""
                  width={2000}
                  height={3200}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </>
  );
}
