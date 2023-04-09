import React from "react";
import {
  getFontSizeForHeading,
  getTextAlign,
  TextAlign,
  HeadingLevel,
} from "@/utils/fonts";
import { relativeToAbsoluteUrls } from "@/utils/relativeToAbsoluteUrls";

interface HeadingProps {
  align?: TextAlign;
  content?: string;
  level?: HeadingLevel;
  textColor: string;
}

export const Paragraph: React.FC<HeadingProps> = ({
  align = "left",
  content,
  level = 6,
  textColor,
}) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: relativeToAbsoluteUrls(content) },
    style: { color: textColor },
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(align)}`,
  });
  return tag;
};
