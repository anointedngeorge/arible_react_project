import Abouts from "@/components/Abouts";
import Contactus from "@/components/Contact";
import Footer from "@/components/Footer";
import HotDeals from "@/components/HotDeals";
import PropertyListing from "@/components/PropertyListing";
import Realtors from "@/components/Realtors";
import Slider from "@/components/Slider";
import Topmenue from "@/components/Topmenue";
import Image from "next/image";

export default function Home() {
  return (
    <main >
        <Topmenue />
        <Slider />
        <HotDeals />
        <Abouts />
        <PropertyListing />
        <Realtors />
        <Contactus />
        <Footer />
    </main>
  );
}
