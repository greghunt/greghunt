import {
  useLocation,
  Form,
  useSubmit,
  useSearchParams,
} from "@remix-run/react";
import Breadcrumb from "~/components/breadcrumb";

export default function Header() {
  const location = useLocation();
  const submit = useSubmit();
  const [searchParams] = useSearchParams();
  return (
    <div className="flex flex-col md:flex-row md:items-end mb-12">
      <h1 className="font-display text-2xl mr-4">
        <a href="/" className="hover:text-teal-400">
          GregHunt.Dev
        </a>
      </h1>
      {location.pathname === "/" ? (
        <Form
          action="/"
          className="flex items-end"
          onChange={(e) => submit(e.currentTarget)}
        >
          <label htmlFor="search" title="Search" className="mr-2 text-xl">
            /s
          </label>
          <input
            id="search"
            type="search"
            autoFocus
            name="s"
            className="bg-transparent border border-slate-500 rounded px-4 py-2 text-slate-300 focus:outline-none focus:border-white"
            defaultValue={searchParams.get("s") ?? ""}
          />
        </Form>
      ) : (
        <Breadcrumb location={location} />
      )}
    </div>
  );
}
