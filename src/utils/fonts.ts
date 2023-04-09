export type TextAlign = "left" | "right" | "center";

export const getTextAlign = (textAlign: TextAlign = "left"): string => {
  const textAlignMap: Record<TextAlign, string> = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  return `${textAlignMap[textAlign] || ""}`;
};

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export const getFontSizeForHeading = (level: HeadingLevel): string => {
  const fontSizeMap: Record<HeadingLevel, string> = {
    1: "text-6xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-1xl",
  };

  return fontSizeMap[level];
};
