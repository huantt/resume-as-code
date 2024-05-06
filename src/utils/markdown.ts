import {remark} from "remark";
import html from "remark-html";

export function markdownToHtml(markdown: string): Promise<string> {
    return remark()
        .use(html)
        .process(markdown).then(result => {
            return result.toString()
        })
}
