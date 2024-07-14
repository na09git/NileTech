import { useState, useEffect } from "react";
import { Blog } from "@/types/blog";
import { getBlog } from "@/app/services/blogService";
// import { getBlog } from ;

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.paragraph}</p>
          <img src={blog.image} alt={blog.title} />
          <div>
            <img src={blog.author.image} alt={blog.author.name} />
            <p>{blog.author.name}</p>
            <p>{blog.author.designation}</p>
          </div>
          <div>{blog.tags.join(", ")}</div>
          <p>{blog.publishDate}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
