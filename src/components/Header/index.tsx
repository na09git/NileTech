"use client";

import { useSession } from "next-auth/react";
import DefaultHeader from "./DefaultHeader";
import AdminHeader from "./AdminHeader";

const Header = () => {
  const { status, data: session } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <>{session?.user.role === "admin" ? null : <DefaultHeader />}</>;
};

export default Header;
