

import Abouts from "@/components/Abouts";
import Contactus from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HotDeals from "@/components/HotDeals";
import JoinRealtorsButton from "@/components/JoinRealtorsButton";
import CustomLayout from "@/components/Layout";
import PropertyListing from "@/components/PropertyListing";
import Realtors from "@/components/Realtors";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Topmenue from "@/components/Topmenue";
import { grediantcolor } from "@/components/Widgets";
import Image from "next/image";


export default function Home() {



  return (
    <CustomLayout >
        <Slider />
        <HotDeals />
        <Abouts />
        <Services />
        <PropertyListing />
        <Realtors />
        <Contactus />
        <FAQ />
        <JoinRealtorsButton 
          mainclassname="p-20"
          btnclassname={`px-32 py-8 rounded-btn text-white font-bold text-2xl ${grediantcolor}`}
          title="Join Our Realtors's Forum"
        />
        
    </CustomLayout>
  );
}
