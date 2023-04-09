import React from "react";
import { Cover } from "../Cover";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { theme } from "theme";
import { Blocks } from "@/utils/cleanAndTransformBlocks";

type ColorName =
  | "foreground"
  | "background"
  | "primary"
  | "secondary"
  | "tertiary"
  | "slate";

interface BlockAttributes {
  url?: string;
  align?: string;
  content?: string;
  level?: number;
  textAlign?: string;
  textColor?: ColorName;
  style?: {
    color?: {
      text?: string;
    };
  };
}

export interface Block {
  id: string;
  name: string;
  attributes: BlockAttributes;
  innerBlocks: Block[];
}

export interface BlockRendererProps {
  blocks: Blocks;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block) => {
        switch (block.name) {
          case "core/paragraph": {
            return (
              <Paragraph
                key={block.id}
                align={block.attributes.align}
                content={block.attributes.content}
                level={block.attributes.level}
                textColor={
                  theme[block.attributes.textColor] ||
                  block.attributes.style?.color?.text
                }
              />
            );
          }
          case "core/heading": {
            return (
              <Heading
                key={block.id}
                textAlign={block.attributes.textAlign}
                content={block.attributes.content}
                level={block.attributes.level}
              />
            );
          }
          case "core/cover": {
            const defaultImageUrl = "/default-image.jpg"; // Replace with your desired default image URL
            return (
              <Cover
                key={block.id}
                background={block.attributes.url || defaultImageUrl}
              >
                <BlockRenderer blocks={block.innerBlocks} />
              </Cover>
            );
          }
          default:
            return null;
        }
      })}
    </>
  );
};
