type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  imageUrl: string;
  content: string;
  publishedAt: string;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};
