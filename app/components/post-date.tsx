import { parseISO, format } from 'date-fns'

interface PostDateProps extends React.HTMLAttributes<HTMLTimeElement> {
  dateString: string
}

export default function PostDate({ dateString, ...rest }: PostDateProps) {
  const dateParts = dateString.split('-')
  const formats = ['yyyy', 'LLLL, yyyy', 'LLLL d, yyyy']
  const date = parseISO(dateString)
  return (
    <time {...rest} dateTime={dateString}>
      {format(date, formats[dateParts.length - 1])}
    </time>
  )
}
