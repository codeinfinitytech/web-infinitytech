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
import SplashScreen from "@/components/SplashScreen";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) {
      // Simulating a delay using setTimeout
      const timeoutId = setTimeout(() => {
        setIsLoading(false); // Set isLoading to false after the timeout
      }, 2000); // Adjust the timeout duration (in milliseconds) as needed

      // Cleanup function to clear the timeout if the component unmounts or isLoading changes before the timeout completes
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  return (
    <main className="flex flex-col justify-center overflow-hidden">
      {isLoading && isHome ? (
        <SplashScreen />
      ) : (
        <>
          <Hero />
          <Services />

          <WebMobile />
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
