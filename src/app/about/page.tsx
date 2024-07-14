import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Nile Technology Solution",
  description: "This is About Page Nile Technology Solution",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Welcome to NileTech, a software development company dedicated to providing cutting-edge solutions for businesses and individuals alike.   Innovation is the core of everything we do ."
      />

      <AboutSectionThree />

    </>
  );
};

export default AboutPage;
