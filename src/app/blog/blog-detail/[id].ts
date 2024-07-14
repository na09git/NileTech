import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    content: string;
    imageUrl?: string;
    createdAt: string;
    author: {
      name: string;
    };
  };
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  console.log("Id:: ", id);

  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }

  const post = await res.json();

  return {
    props: { post },
  };
};

// const BlogPost = ({ post }: BlogPostProps) => {
//   const router = useRouter();
//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>By {post.author.name}</p>
//       <p>{new Date(post.createdAt).toLocaleDateString()}</p>
//       {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
//       <div>{post.content}</div>
//     </div>
//   );
// };

// export default BlogPost;
