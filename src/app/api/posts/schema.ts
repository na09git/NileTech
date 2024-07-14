import { z } from "zod";

const schema = z.object({
  title: z.string().min(3, "Title should have at least 3 characters"),
  content: z.string().min(10, "Content should have at least 10 characters"),
  imageUrl: z.string().url("Invalid URL format"),
  authorId: z.string().min(3, "AUthor Id should have at least 3 characters"),
  categoryId: z.string().min(3, "Category should have at least 3 characters"),
});

export default schema;
