import { Metadata } from 'next'
import { getPosts } from '@/app/lib/content'
import Posts from '@/app/components/posts'

export const metadata: Metadata = {
  title: 'Work with Me',
  description: `I'm always open to collaboration in different forms`,
}

export default async function Page() {
  const posts = await getPosts({
    tags: ['work', 'project', 'charity', 'portfolio'],
  })
  return <Posts posts={posts} />
}
