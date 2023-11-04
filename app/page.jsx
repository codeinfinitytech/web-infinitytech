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

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <Hero />
      <Services />
      <WebMobile />
      <CaseStudies />
      <Aboutus />
      <WhatSay />
      <ContactUs />
      <Footer />
    </main>
  );
}
