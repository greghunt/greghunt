import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";

import { useLoaderData } from "@remix-run/react";
import MarkdownIt from "markdown-it";
import fm from "front-matter";

export const loader: LoaderFunction = async () => {
  const md = new MarkdownIt("commonmark");
  const authKey = btoa(`greghunt:${GH_TOKEN}`);
  const query = encodeURIComponent(
    "repo:greghunt/content extension:md path:/public"
  );
  const response = await fetch(
    `https://api.github.com/search/code?q=${query}`,
    {
      headers: {
        Authorization: `Basic ${authKey}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "GH-Dev-Website",
      },
    }
  );

  const body = await response.json();
  const content = await Promise.all(
    body.items.map((item) => {
      return fetch(item.url, {
        headers: {
          Authorization: `Basic ${authKey}`,
          Accept: "application/vnd.github.v3.raw",
          "User-Agent": "GH-Dev-Website",
        },
      })
        .then((response) => response.text())
        .then((post) => {
          const { attributes, body } = fm(post);
          return {
            slug: item.name.replace(".md", ""),
            attributes,
            html: md.render(body),
          };
        });
    })
  );

  return json(await content);
};

export default function Index() {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Greg Hunt</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <h2>
              <a href={`/${post.slug}`}>{post.attributes.title}</a>
            </h2>
            <p>{post.attributes.description}</p>
            {post.attributes.pinned && (
              <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
