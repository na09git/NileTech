import { prisma } from "prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const blogs = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return NextResponse.json(blogs);
}

// export async function GET(request: NextRequest) {
//   // const blog = await prisma.post.findMany();
//   const blogs = await prisma.post.findMany({
//     include: {
//       author: {
//         select: {
//           name: true,
//         },
//       },
//     },
//   });

//   return NextResponse.json(blogs);
// }
