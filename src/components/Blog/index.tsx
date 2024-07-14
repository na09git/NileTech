"use client";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
// import blogData from "./blogData";
import { getBlog } from "@/app/services/blogService";
import { Blog } from "@/types/blog";

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const data = await getBlog();
  //       const blogsWithBlobUrls = await Promise.all(
  //         data.map(async (blog: Blog) => {
  //           if (blog.imageUrl) {
  //             // If the image is a blob URL, handle it appropriately
  //             const response = await fetch(blog.imageUrl);
  //             const blob = await response.blob();
  //             const blobUrl = URL.createObjectURL(blob);
  //             console.log("blobUrl: ", blobUrl);
  //             return { ...blog, imageUrl: blobUrl };
  //           }
  //           return blog;
  //         }),
  //       );
  //       setBlogs(blogsWithBlobUrls);
  //     } catch (err: any) {
  //       setError(err.message || "Failed to fetch blogs");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlog();
        setBlogs(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log("blogs::  ", blogs);

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
