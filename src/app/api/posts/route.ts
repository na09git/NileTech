import { prisma } from "prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function POST(request: NextRequest) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    console.log("body: ", body);
    const validation = schema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, {
        status: 400,
      });
    }

    const { title, content, imageUrl, authorId, categoryId } = validation.data;

    // Create a new blog post in the database
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        imageUrl,
        authorId,
        categoryId,
        publishedAt: new Date(),
      },
    });

    // Return the newly created post
    return NextResponse.json(newPost, {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Error creating post" },
      {
        status: 500,
      },
    );
  }
}

export async function GET(request: NextRequest) {
  const blog = await prisma.post.findMany();

  return NextResponse.json(blog);
}
