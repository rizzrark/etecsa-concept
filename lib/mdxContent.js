import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

//Finding directory named "posts" from the current working directory of Node.
const docsDirectory = join(process.cwd(), "_content");

export function getSortedDocsData() {
  // Reads all the file under /_content directory
  const fileNames = fs.readdirSync(docsDirectory);

  const allDocsData = fileNames.map((fileName) => {
    const slug = fileName.replace(".mdx", "");

    //Read markdown file as string
    const fullPath = join(docsDirectory, fileName);
    // Extracts contents of the MDX file
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the doc metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      slug,
      ...matterResult.data,
    };
  });
  // Sort docs by date
  return allDocsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

//Get Slugs
export const getAllDocSlugs = () => {
  const fileNames = fs.readdirSync(docsDirectory);
  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".mdx", ""),
      },
    };
  });
};
//Get Post based on Slug
export const getDocdata = async (slug) => {
  const fullPath = join(docsDirectory, `${slug}.mdx`);
  const docContent = fs.readFileSync(fullPath, "utf8");
  return docContent;
};
