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
    <div>
      <h1 className="font-display text-white text-4xl mb-8">{title}</h1>
      <div
        className="prose prose-invert"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}
