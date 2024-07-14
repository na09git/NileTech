import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Nile Technology Solution",
  description: "This is Contact Page for Nile Technology Solution",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description=" For External Relations and Communication "
      />

      <Contact />
    </>
  );
};

export default ContactPage;
