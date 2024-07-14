"use client";
import AddBlog from "@/components/AddBlog";
import SideBar from "@/components/Admin/SideBar/SideBar";
import BlogPost from "@/components/BlogPost";
import Header from "@/components/Header/AdminHeader";
import React, { useState } from "react";
// import SideBar from "../../components/SideBar/SideBar";

function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState("addNewPost");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "addNewPost":
        return <BlogPost />;

      default:
        return <AddBlog />;
    }
  };
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar setSelectedComponent={setSelectedComponent} />
        {renderComponent()}
      </div>
    </>
  );
}

export default Dashboard;
