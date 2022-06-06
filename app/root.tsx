import type { MetaFunction } from "@remix-run/cloudflare";
import Header from "~/components/header";
import styles from "./styles/app.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export function links() {
  return [
    { rel: "icon", href: "/icon.svg" },
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inconsolata:wght@400&family=Montserrat:wght@800&display=swap",
    },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Greg Hunt, Web Developer",
  description:
    "A dump of my thoughts on a variety of topics, but mostly web development.",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html
      lang="en"
      className="font-mono scroll-smooth bg-gradient-to-br from-slate-900 to-cyan-700 text-slate-200 min-h-full"
    >
      <head>
        <Meta />
        <Links />
      </head>
      <body className="py-8 px-8">
        <Header />
        <div className="md:ml-12">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
