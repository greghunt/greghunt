export default function Breadcrumb({ location }) {
  return (
    <ol className="flex items-center space-x-2 text-slate-400">
      <li>
        <a href="/" className="text-white">
          Home
        </a>
      </li>
      {location.pathname
        .split("/")
        .filter((i) => i)
        .map((part, i) => (
          <li key={i}>
            <span className="mr-2">/</span>
            <span>{part}</span>
          </li>
        ))}
    </ol>
  );
}
