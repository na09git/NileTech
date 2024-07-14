import { prisma } from "prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  console.log("id:  ", id);
  if (typeof id !== "string") {
    return NextResponse.json("Invalid ID", {
      status: 400,
    });
  }

  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!post) {
      return NextResponse.json(
        { error: "Invalid ID" },
        {
          status: 404,
        },
      );
    }
    console.log("post: ", post);

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
