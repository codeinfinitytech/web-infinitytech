"use client";
import {
  Aboutus,
  CaseStudies,
  ContactUs,
  Footer,
  Services,
  WebMobile,
  WhatSay,
} from "@/components";
import Hero from "@/components/Hero";
import Last from "@/components/Last";
import SplashScreen from "@/components/SplashScreen";
import Internship from "@/components/services/Internship";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import rocket from "../public/rocket-launch.svg"

export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) {
      // Simulating a delay using setTimeout
      const timeoutId = setTimeout(() => {
        setIsLoading(false); // Set isLoading to false after the timeout
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col justify-center overflow-hidden">
      {isLoading && isHome ? (
        <SplashScreen />
      ) : (
        <>
          <ScrollToTop
            smooth
            color="#fff"
            style={{ backgroundColor: "#F59620",zIndex:"1000",textAlign:"center"}}
          />
          <Hero />
          <Services />
          <WebMobile />
          <Internship/>
          <CaseStudies />
          <Aboutus />
          <WhatSay />
          <ContactUs />
          <Footer />
        </>
      )}
    </main>
  );
}
