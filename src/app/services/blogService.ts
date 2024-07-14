import axios from "axios";
const BLOG_POST_URL = "/api/posts";
const GET_BLOG_URL = "/api/blog";

export const createPost = async (postData: {
  title: string;
  content: string;
  imageUrl: string;
  authorId: string; // Replace with actual type or interface
  categoryId: string; // Replace with actual type or interface
}) => {
  try {
    const response = await axios.post(BLOG_POST_URL, postData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Error creating post");
  }
};

export const getBlog = async () => {
  try {
    const response = await axios.get(GET_BLOG_URL);

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Error creating post");
  }
};

export const showBlog = async (id: string) => {
  try {
    const response = await axios.get(`${GET_BLOG_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Error creating post");
  }
};
