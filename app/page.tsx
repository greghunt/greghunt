import { getPosts } from '@/app/lib/content'
import Posts from '@/app/components/posts'
import Header from '@/app/components/header'
import { Newsletter } from '@/app/components/newsletter'
import Hero from './components/hero'

export default async function Home() {
  const posts = await getPosts({})

  return (
    <>
      <Header />
      <Hero />
      <main id="posts">
        <div className="wrapper">
          {/* <Newslettercon /> */}
          <Posts posts={posts} />
        </div>
      </main>
    </>
  )
}
