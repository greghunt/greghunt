interface PostSearchFilterProps extends React.ComponentPropsWithoutRef<'form'> {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

export default function PostSearchFilter({
  query,
  setQuery,
  ...rest
}: PostSearchFilterProps) {
  return (
    <form {...rest}>
      <input
        type="text"
        className="w-full border-b-2 border-transparent bg-transparent text-xl focus:outline-none focus:border-teal-400 py-3"
        name="q"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}
