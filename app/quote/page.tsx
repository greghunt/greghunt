import Link from 'next/link'
import { Metadata } from 'next'
import Header from '@/app/components/header'
import QuoteForm from '@/app/components/quote-form'

export const metadata: Metadata = {
  title: 'Get a Quote',
  description: 'Fill in this form to receive a website quote from me.',
}

export default async function Page({ params }: { params: { tag: string } }) {
  return (
    <>
      <Header hideOnScroll={false} />
      <div className="wrapper my-6">
        <Link href="/" className="text-xl font-light hover:text-teal-400">
          Greg Hunt, Web Developer
        </Link>
        <main>
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold uppercase">Get a Quote</h1>
            <p className="text-xl font-light leading-normal my-12">
              Websites come in all different shapes and sizes. To give you the
              most accurate quote on your website build, I'll need some more
              details.
            </p>
            <p className="mb-8">Please fill in the form below.</p>
            <QuoteForm />
          </div>
        </main>
      </div>
    </>
  )
}
