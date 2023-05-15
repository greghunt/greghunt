import type { PostMeta } from '@/app/lib/content'

type GroupedPosts = {
  [year: string]: {
    [month: string]: {
      [day: string]: PostMeta[]
    }
  }
}

export function groupByDate(posts: PostMeta[]): GroupedPosts {
  return posts.reduce((result: GroupedPosts, post) => {
    const [year, month, day] = post.date.split('-')

    if (!result[year]) {
      result[year] = {}
    }

    if (!result[year][month]) {
      result[year][month] = {}
    }

    if (!result[year][month][day]) {
      result[year][month][day] = []
    }

    result[year][month][day].push(post)

    return result
  }, {})
}

export function getTagsFromPosts(posts: PostMeta[]): string[] {
  return posts.reduce((accumulator: string[], { tags }) => {
    tags?.forEach((tag) => {
      if (!accumulator.includes(tag)) {
        accumulator.push(tag)
      }
    })
    return accumulator
  }, [])
}
