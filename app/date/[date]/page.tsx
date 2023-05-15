import { Metadata } from 'next'
import { getPosts } from '@/app/lib/content'
import Archive from '@/app/components/archive'
import PostDate from '@/app/components/post-date'

interface DateParams {
  params: { date: string }
}

export function generateMetadata({ params }: DateParams): Metadata {
  return {
    title: `Archives: ${params.date}`,
    description: `Things that have happend in my life during ${params.date}`,
  }
}

export default async function Page({ params }: DateParams) {
  const posts = await getPosts({ date: params.date })
  return <Archive posts={posts} title={<PostDate dateString={params.date} />} />
}
