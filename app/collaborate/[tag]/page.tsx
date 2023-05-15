import { Metadata } from 'next'
import { getPosts } from '@/app/lib/content'
import { TagProps } from '@/app/types'
import Posts from '@/app/components/posts'

export function generateMetadata({ params }: TagProps): Metadata {
  return {
    title: `Work with me on ${params.tag}`,
    description: `Things relevant to ${params.tag}`,
  }
}

export default async function Page({ params }: TagProps) {
  const posts = await getPosts({ tag: params.tag })
  return <Posts posts={posts} />
}
