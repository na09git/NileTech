import { GetServerSideProps } from "next";
import { prisma } from "prisma/client";

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

  const post = await prisma.post.findUnique({
    where: { id: String(id) },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  if (!post) {
    return {
      notFound: true,
    };
  }
  console.log("post: ", post);

  return {
    props: { post },
  };
};
