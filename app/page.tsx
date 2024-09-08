import Abouts from "@/components/Abouts";
import Contactus from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HotDeals from "@/components/HotDeals";
import JoinRealtorsButton from "@/components/JoinRealtorsButton";
import PropertyListing from "@/components/PropertyListing";
import Realtors from "@/components/Realtors";
import Slider from "@/components/Slider";
import Topmenue from "@/components/Topmenue";
import { grediantcolor } from "@/components/Widgets";
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
        <FAQ />
        <JoinRealtorsButton 
          mainclassname="p-20"
          btnclassname={`btn btn-lg btn-secondary px-32 rounded-2xl text-white font-bold text-2xl ${grediantcolor}`}
          title="Join Our Realtors's Forum"
        />
        <Footer />
    </main>
  );
}
