'use client'

import { useState, useEffect } from 'react'
import Card from '@/app/components/card'
import PostSearchFilter from '@/app/components/post-search-filter'
import { PostMeta } from '@/app/lib/content'
import { groupByDate, getTagsFromPosts } from '@/app/lib/utils'
import slugify from 'slugify'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'] })

function normalize(str: string) {
  return slugify(str.toLowerCase())
}

function getMonthName(monthNumber: number) {
  const date = new Date()
  date.setMonth(monthNumber - 1) // Adjust month to 0-based index
  return date.toLocaleString('default', { month: 'long' })
}

export default function Posts({ posts }: { posts: PostMeta[] }) {
  const searchParams = useSearchParams()
  const [filter, setFilter] = useState<string>(searchParams.get('q') || '')

  const filteredPosts = posts.filter((p) => {
    if (filter.length < 2) return true
    const normalized = normalize(filter)
    return (
      normalize(p.slug).includes(normalized) ||
      normalize(p.title).includes(normalized) ||
      p.tags?.includes(normalized)
    )
  })

  const tags = getTagsFromPosts(filteredPosts)
  const postList = groupByDate(filteredPosts)

  return (
    <>
      <PostSearchFilter className="my-8" query={filter} setQuery={setFilter} />
      <div className="flex flex-col md:flex-row md:justify-between md:gap-20">
        <div>
          {Object.entries(postList)
            .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
            .map(([year, months]) => (
              <div
                key={year}
                className="flex flex-col md:flex-row-reverse md:justify-end md:gap-12 border-r-8 border-[#19202B]"
              >
                <div className="sticky top-0 z-40 bg-gradient-to-b from-dark/50 pt-4 pb-10 md:py-0">
                  <h2
                    className={`${oswald.className} sticky top-6 text-5xl font-extrabold text-slate-700 tracking-tighter w-full md:w-[4ch] md:text-right bg-dark -mr-2`}
                  >
                    <Link href={`/date/${year}`}>{year}</Link>
                  </h2>
                </div>
                <div className="flex-1">
                  {Object.entries(months)
                    .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
                    .map(([month, days]) => (
                      <div
                        key={month}
                        className="flex flex-col md:flex-row-reverse md:justify-between md:gap-12 border-r border-dashed border-[#2D394D]"
                      >
                        <div className="sticky top-12 z-40">
                          <h3
                            className={`${oswald.className} md:text-right sticky top-6 text-3xl font-bold text-slate-400 w-full md:w-[8ch] uppercase bg-dark -mr-2`}
                          >
                            <Link href={`/date/${year}-${month}`}>
                              {getMonthName(parseInt(month))}
                            </Link>
                          </h3>
                        </div>
                        <div className="w-full mt-4 md:mt-0">
                          {Object.entries(days).map(([day, posts]) => (
                            <>
                              {posts.map((post, index) => (
                                <Card
                                  key={post.slug}
                                  post={post}
                                  className="mb-8 w-full"
                                />
                              ))}
                            </>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
        <div>
          <div className="sticky top-0">
            <ul className="text-right">
              {tags.map((tag) => (
                <li key={tag}>
                  <Link
                    href={`/tag/${tag}`}
                    className="text-slate-400 hover:text-teal-400 transition py-0.5 block"
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
