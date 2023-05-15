import { Metadata } from 'next'
import { getPosts, PostMeta } from '@/app/lib/content'
import Card from '@/app/components/card'

async function getData() {
  const posts: PostMeta[] = await getPosts({})
  return posts
}

export const metadata: Metadata = {
  title: 'Work with Me',
}

export default async function Page({ params }: { params: { tag: string } }) {
  const posts = await getData()

  return (
    <main>
      <h1 className="text-5xl font-bold">Work with Me</h1>
      <p>I'm always open to collaboration in different forms:</p>
      <p>Partnerships | Consulting | Contract Work | Charity</p>
      {posts.map((post) => (
        <Card key={post.slug} post={post} />
      ))}
    </main>
  )
}
