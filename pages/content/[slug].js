import { getAllDocSlugs, getDocdata } from "@/lib/mdxContent";
import matter from "gray-matter";

export default function Docs({ source, frontMatter }) {
  return (
    <div className="prose">
      <div>
        <h1>{frontMatter.title}</h1>
        <div>{source}</div>
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const paths = getAllDocSlugs();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const docContent = await getDocdata(params.slug);
  const { data, content } = matter(docContent);
  return {
    props: {
      source: content,
      frontMatter: data,
    },
  };
}
