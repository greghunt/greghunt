import Link from 'next/link'
import { Metadata } from 'next'
import { getPosts } from '@/app/lib/content'
import Header from '@/app/components/header'
import Posts from '@/app/components/posts'

export const metadata: Metadata = {
  title: 'Work with Me',
  description: `I'm always open to collaboration in different forms`,
}

export default async function Page({ params }: { params: { tag: string } }) {
  const posts = await getPosts({ tags: ['work', 'project'] })

  return (
    <>
      <Header hideOnScroll={false} />
      <div className="wrapper my-6">
        <Link href="/" className="text-xl font-light hover:text-teal-400">
          Greg Hunt, Web Developer
        </Link>
        <main>
          <h1 className="text-5xl font-bold uppercase">Work with Me</h1>
          <p className="text-xl font-light">
            I'm always open to collaboration in different forms:
          </p>
          <ul className="my-8">
            <li>Partnerships</li>
            <li>Consulting</li>
            <li>Contract Work</li>
            <li>Charity</li>
          </ul>
          <p>Below are some samples of my work and experience.</p>
          <Posts posts={posts} />
        </main>
      </div>
    </>
  )
}
