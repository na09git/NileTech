"use client";
import BlogDetail from "@/components/BlogDetail";
import { useParams } from "next/navigation";
function BlogPostPage() {
  const { id } = useParams<{ id: string }>(); // Type for type safety

  // const { id } = router.;
  console.log("id: ", id);
  return <BlogDetail id={id} />;
}

export default BlogPostPage;
