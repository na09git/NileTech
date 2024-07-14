import { format } from "date-fns";

export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return format(date, "MMMM d, yyyy, h:mm a");
};
