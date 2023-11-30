import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Deals from "./components/Deals";
import WhyUs from "./components/WhyUs";
import Testimonial from "./components/Testimonial";
import InfoSearch from "./components/InfoSearch";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfoSearch />
      <Deals />
      <WhyUs />
      <Steps />
      <Testimonial />
      <Footer />
    </div>
  );
}
