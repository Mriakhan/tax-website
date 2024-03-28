"use client"
import Image from "next/image";
import Header from "./component/header";
import Herosection from "./component/herosection";
import Saving from "./component/saving";
import Aboutus from "./component/aboutus";
import Ourservices from "./component/ourservices";
import Casestudy from "./component/casestudy";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      anchorPlacement: "top-bottom",
    });
  });
  AOS.refresh();
  return (
    <>
      < Header />
      < Herosection />
      <Saving />
      <Aboutus />
      <Ourservices />
      <Casestudy />
    </>
  );
}
