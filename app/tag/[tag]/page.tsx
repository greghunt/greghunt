import { Metadata } from 'next'
import { getPosts } from '@/app/lib/content'
import Archive from '@/app/components/archive'
import { TagProps } from '@/app/types'

export function generateMetadata({ params }: TagProps): Metadata {
  return {
    title: `Tag ${params.tag}`,
    description: `Things relevant to ${params.tag}`,
  }
}

export default async function Page({ params }: TagProps) {
  const posts = await getPosts({ tag: params.tag })
  return <Archive posts={posts} title={params.tag} />
}
