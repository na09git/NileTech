// utils/formatContent.ts
export const truncateContent = (
  content: string,
  wordLimit: number = 25,
): string => {
  const words = content.split(" ");
  if (words.length <= wordLimit) {
    return content;
  }
  return words.slice(0, wordLimit).join(" ") + "...";
};
