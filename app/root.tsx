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
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

// export const loader: LoaderFunction = async ({ request }) => {
//   return json({
//     url: new URL(request.url),
//   });
// };

export default function App() {
  return (
    <html lang="en" className="font-mono scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-900 text-slate-200 py-8 px-8">
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
