import React, { useRef } from "react";
import Category from "./Category";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import Heading from "../../components/heading/Heading";

function Home() {
  const categoriesRef = useRef(null);

  const scrollToCategories = () => {
    categoriesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero scrollToCategories={scrollToCategories} />
      <div ref={categoriesRef} className="mx-auto w-11/12 mb-6 md:mb-12">
        <Heading text="Category" marginY="my-6 md:my-8" textAlign="text-center" />
        <Category />
      </div>
    </>
  );
}

export default Home;
