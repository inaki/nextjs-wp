import { BlockRenderer } from "@/components/BlockRenderer";
import { Heading } from "@/components/Heading";
import { cleanAndTransformBlocks } from "@/utils/cleanAndTransformBlocks";
import { gql } from "@apollo/client";
import client from "client";
import { GetStaticPaths } from "next";

const Page: React.FC = ({ title, blocks }) => {
  return (
    <div>
      <Heading content={title} />
      <BlockRenderer blocks={blocks} />
    </div>
  );
};

export default Page;

interface PageNode {
  uri: string;
}

interface PagesData {
  pages: {
    nodes: PageNode[];
  };
}

interface QueryData {
  data: PagesData;
}

export const getStaticProps = async (context) => {
  const uri = `/${context.params.slug.join("/")}/`;
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocks
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });

  return {
    props: {
      title: data.nodeByUri.title,
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<PagesData>({
    query: gql`
      query NewQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: data.pages.nodes
      .filter((page) => page.uri !== "/")
      .map((page) => ({
        params: {
          slug: page.uri.substring(1, page.uri.length - 1).split("/"),
        },
      })),
    fallback: "blocking",
  };
};
