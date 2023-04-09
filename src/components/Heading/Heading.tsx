import React from "react";
import {
  getFontSizeForHeading,
  getTextAlign,
  TextAlign,
  HeadingLevel,
} from "@/utils/fonts";

interface HeadingProps {
  textAlign?: TextAlign;
  content: string;
  level: HeadingLevel;
}

export const Heading: React.FC<HeadingProps> = ({
  textAlign = "left",
  content,
  level = 2,
}) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  });
  return tag;
};
