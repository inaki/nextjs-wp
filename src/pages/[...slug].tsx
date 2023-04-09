import { Page } from "@/components/Page";
import { getPageStaticProps } from "@/utils/getPageStaticProps";
import { gql } from "@apollo/client";
import client from "client";
import { GetStaticPaths } from "next";

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

export const getStaticProps = getPageStaticProps;

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
