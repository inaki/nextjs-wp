import { v4 as uuid } from "uuid";

interface Block {
  id?: string;
  innerBlocks?: Block[];
  [key: string]: any;
}

export type Blocks = Block[];

const assignIds = (blocks: Blocks): void => {
  blocks.forEach((block) => {
    block.id = uuid();
    if (block.innerBlocks?.length) {
      assignIds(block.innerBlocks);
    }
  });
};

export const cleanAndTransformBlocks = (blocksJSON: Blocks): Blocks => {
  const blocks: Blocks = JSON.parse(JSON.stringify(blocksJSON));
  assignIds(blocks);
  return blocks;
};
