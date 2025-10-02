import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import ButtonGradient from "@/public/svg/ButtonGradient";
import Benefits from "@/components/Benefits";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;
