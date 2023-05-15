import { Metadata } from 'next'
import { getPosts } from '@/app/lib/content'
import Archive from '@/app/components/archive'

interface TagParams {
  params: { tag: string }
}

export function generateMetadata({ params }: TagParams): Metadata {
  return {
    title: `Tag ${params.tag}`,
    description: `Things relevant to ${params.tag}`,
  }
}

export default async function Page({ params }: TagParams) {
  const posts = await getPosts({ tag: params.tag })
  return <Archive posts={posts} title={params.tag} />
}
