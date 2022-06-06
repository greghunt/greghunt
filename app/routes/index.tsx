import type { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";

import { useLoaderData } from "@remix-run/react";
import MarkdownIt from "markdown-it";
import fm from "front-matter";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const md = new MarkdownIt("commonmark");
  const authKey = btoa(`greghunt:${GH_TOKEN}`);
  const searchQuery = url.searchParams.get("s");
  let query = "repo:greghunt/content extension:md path:/public";
  if (searchQuery && searchQuery.length > 3) {
    query = query + ` ${searchQuery}`;
  }

  const response = await fetch(
    "https://api.github.com/search/code?q=" + encodeURIComponent(query),
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

  return json({ posts: await content, searchQuery });
};

export default function Index() {
  const { posts, searchQuery } = useLoaderData();
  return (
    <div className="max-w-screen-md">
      {posts.length > 0 ? (
        <ul className="space-y-12">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="bg-slate-800 p-8 rounded-xl border border-transparent hover:border-slate-400"
            >
              <h2 className="font-display text-4xl text-white mb-4">
                <a href={`/${post.slug}`} className="hover:text-teal-400">
                  {post.attributes.title}
                </a>
              </h2>
              <div className="prose prose-invert text-lg">
                <div className="flex items-center space-x-4">
                  {post.attributes.date && (
                    <time className="text-slate-400">
                      {new Date(post.attributes.date).toLocaleDateString()}
                    </time>
                  )}
                  {post.attributes.categories &&
                    post.attributes.categories
                      .split(",")
                      .map((i) => (
                        <span className="inline-block px-3 text-sm border border-slate-500 rounded-full">
                          {i.trim()}
                        </span>
                      ))}
                </div>
                <p>{post.attributes.description}</p>
                {post.attributes.pinned && (
                  <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-4xl font-display">
          Sorry, couldn't find anything related to "
          <span className="text-teal-200">{searchQuery}</span>"
        </div>
      )}
    </div>
  );
}
