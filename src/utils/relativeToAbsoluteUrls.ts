export const relativeToAbsoluteUrls = (htmlString: string = ""): string => {
  return htmlString.split(process.env.NEXT_PUBLIC_WP_URL as string).join("");
};
