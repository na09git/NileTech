import { showBlog } from "@/app/services/blogService";
import { Blog } from "@/types/blog";
import React, { useEffect, useState } from "react";
import SingleBlogDetail from "./SingleBlogDetail";

function BlogDetail({ id }) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  console.log("id inside the: ", id);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await showBlog(id);
        setBlogs(data);
        console.log("data: ", data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <SingleBlogDetail blog={blogs} />
    </div>
  );
}

export default BlogDetail;
