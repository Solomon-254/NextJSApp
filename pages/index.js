import Image from "next/image";
import { Inter } from "next/font/google";
import ProductList from "@/components/product_list";
import Categories from "@/components/categories";
import NavBar from "@/components/ui/nav_bar";
import ImageCarousel from "@/components/image_carousel";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <ImageCarousel />
      <Categories/>
      <ProductList />
      <Footer/>
    </>
  );
}
