import Link from "next/link";
import { getSortedDocsData } from "@/lib/mdxContent";

const DocsIndex = ({ allDocsData }) => {
  return (
    <>
      <section className="inline-block p-4 bg-white shadow-lg rounded-2xl ">
        <div className="prose">
          <h1>My Blog</h1>
          <div className="flex flex-col flex-wrap mt-5">
            {allDocsData.map(({ slug, title, excerpt }) => (
              <div className="" key={slug}>
                <li className="flex">
                  <div>
                    <Link
                      key={slug}
                      href="/content/[slug]"
                      as={`/content/${slug}`}
                    >
                      <a>
                        <header className="text-xl font-semibold">
                          {title}
                        </header>
                      </a>
                    </Link>
                    <div className="my-2">{excerpt}</div>
                  </div>
                </li>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DocsIndex;

export async function getStaticProps() {
  const allDocsData = getSortedDocsData();
  return {
    props: {
      allDocsData,
    },
  };
}
