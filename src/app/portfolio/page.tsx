import PortfolioSectionOne from "@/components/Portfolio/PortfolioSectionOne";
import PortfolioSectionThree from "@/components/Portfolio/PortfolioSectionThree";
import PortfolioSectionTwo from "@/components/Portfolio/PortfolioSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Page | Nile Technology Solution",
  description: "This is Portfolio Page Nile Technology Solution",
  // other metadata
};

const PortfolioPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Portfolio Page"
        description="Innovation is the core of everything we do.
                    Discover our diverse portfolio and witness our
                    exceptional projects. Explore the remarkable solutions
                    we have crafted at Nile Technology Solution."
      />

      <PortfolioSectionOne />

    </>
  );
};

export default PortfolioPage;