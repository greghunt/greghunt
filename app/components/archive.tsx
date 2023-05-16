import Link from 'next/link'
import Header from '@/app/components/header'
import PageTitle from '@/app/components/page-title'
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
          <PageTitle className="mb-12 text-gradient">{title}</PageTitle>
          <Posts posts={posts} />
        </main>
      </div>
    </>
  )
}
