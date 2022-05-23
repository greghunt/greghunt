import { json } from "@remix-run/cloudflare";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import MarkdownIt from "markdown-it";
import fm from "front-matter";

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  const md = new MarkdownIt("commonmark");
  const authKey = btoa(`greghunt:${GH_TOKEN}`);

  const response = fetch(
    `https://raw.githubusercontent.com/greghunt/content/main/public/${slug}.md`,
    {
      headers: {
        Authorization: `Basic ${authKey}`,
        Accept: "application/vnd.github.v3.raw",
      },
    }
  )
    .then((response) => response.text())
    .then((post) => {
      const { attributes, body } = fm(post);
      return {
        ...attributes,
        html: md.render(body),
      };
    });

  return json(await response);
};

export default function Index() {
  const { title, html } = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        <a href="/">Greg Hunt</a>
      </h1>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}
