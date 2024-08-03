import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Service from "@/components/Service";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Page | Nile Technology Solution",
  description: "This is Service Page for Nile Technology Solution",
  // other metadata
};

const ServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Service Page"
        description="Our mission is to make your business better through technology. "
      />

      <Service />
      <AboutSectionOne />
    </>
  );
};

export default ServicePage;
