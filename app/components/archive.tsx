import Link from 'next/link'
import Header from '@/app/components/header'
import { PostMeta } from '@/app/lib/content'
import Posts from '@/app/components/posts'
import { ReactElement } from 'react'

export default function Archive({
  posts,
  title,
}: {
  posts: PostMeta[]
  title: string | ReactElement
}) {
  return (
    <>
      <Header hideOnScroll={false} />
      <div className="wrapper my-6">
        <Link href="/" className="text-xl font-light hover:text-teal-400">
          Greg Hunt, Web Developer
        </Link>
        <main>
          <h1 className="text-5xl font-bold uppercase mb-12">{title}</h1>
          <Posts posts={posts} />
        </main>
      </div>
    </>
  )
}
