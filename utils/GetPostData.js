import matter from 'gray-matter'
import { remark } from 'remark';
import html from 'remark-html';

export async function getPostData(content) {
    const fileContents = content
    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
        contentHtml,
        ...matterResult.data,
    };
}