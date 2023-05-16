import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import '../prism.css'
import { getPost, Post } from '@/app/lib/content'
import Header from '@/app/components/header'
import PageTitle from '@/app/components/page-title'
import PostDate from '@/app/components/post-date'
import Image from 'next/image'
import { Turnaround } from '@/app/icons'

interface PageParams {
  params: { slug: string }
}

async function getData(slug: string) {
  try {
    const post: Post = await getPost(slug)
    return post
  } catch (err) {
    notFound()
  }
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { title, description } = await getData(params.slug)
  return { title, description }
}

export default async function Page({ params }: PageParams) {
  const post = await getData(params.slug)

  return (
    <>
      <Header hideOnScroll={false} />
      <div className="wrapper mt-6 mb-32">
        <Link href="/" className="text-xl font-light hover:text-teal-400">
          Greg Hunt, Web Developer
        </Link>
        <main className="mt-20 max-w-3xl">
          <Link href="/#posts" className="hover:text-teal-400">
            Back <Turnaround className="inline-block mr-1 w-4 h-4" />
          </Link>
          <article>
            <PageTitle className="mb-12 text-gradient">{post.title}</PageTitle>

            {post.image && (
              <div className="h-80 my-6">
                <Image
                  src={post.image.src}
                  alt={post.image.alt || post.title}
                  width={800}
                  height={400}
                  className="h-full w-auto rounded-xl"
                />
              </div>
            )}
            <PostDate
              className="text-slate-400 my-3 block"
              dateString={post.date}
            />
            <ul className="flex space-x-3">
              {post.tags &&
                post.tags.map((tag) => (
                  <li>
                    <Link
                      href={`/tag/${tag}`}
                      className="hover:text-teal-400 uppercase px-3 py-2 text-xs font-bold border border-teal-400 rounded-full"
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
            </ul>
            <div className="prose prose-invert my-12">{post.content}</div>
          </article>
        </main>
      </div>
    </>
  )
}
