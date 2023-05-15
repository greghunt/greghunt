import path from 'path'
import { promises as fs } from 'fs'
import index, { pinned as pinnedItems } from '@/content/_index'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import { ReactElement } from 'react'
import { compileMDX } from 'next-mdx-remote/rsc'

interface PostFilter {
  date?: string
  tag?: string
  tags?: string[]
}

export type IndexItem = {
  date: string
  slug: string
  tags?: string[]
}

export type PostFrontMatter = {
  title: string
  description: string
  image?: {
    src: string
    alt?: string
  }
  link?: {
    href: string
    label: string
  }
}

export type PostMeta = IndexItem & PostFrontMatter

export type Post = PostMeta & {
  content: ReactElement
}

const contentDirectory = path.join(process.cwd(), 'content')

function findItemBySlug(slug: string): IndexItem {
  const item: IndexItem | undefined = index.find(
    (item: IndexItem) => item.slug === slug
  )

  if (!item) {
    throw new Error('Post not found')
  }

  return item
}

async function getPostByItem(
  item: IndexItem,
  includeContent: Boolean = true
): Promise<PostMeta | Post> {
  const fileContents = await getFileContents(item)
  const { frontmatter, content } = await parseMarkdown(fileContents)
  const meta: PostMeta = { ...item, ...frontmatter }

  if (includeContent) {
    return {
      ...meta,
      content,
    } as Post
  }

  return meta as PostMeta
}

async function checkFileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath)
    return true
  } catch (error) {
    return false
  }
}

async function getFileContents(item: IndexItem): Promise<string> {
  let filename = contentDirectory + `/${item.date}_${item.slug}.md`
  const mdExists = await checkFileExists(filename)
  if (!mdExists) filename = filename + 'x'
  return await fs.readFile(filename, 'utf8')
}

async function parseMarkdown(markdown: string) {
  const { content, frontmatter } = await compileMDX<PostFrontMatter>({
    source: markdown,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrism],
        format: 'mdx',
      },
      parseFrontmatter: true,
    },
  })

  return { content, frontmatter }
}

export async function getPost(slug: string): Promise<Post> {
  const item = await findItemBySlug(slug)
  const post = (await getPostByItem(item, true)) as Post
  return post
}

function sortIndex(index: IndexItem[]): IndexItem[] {
  return index.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export async function getPosts(
  filter: PostFilter,
  pinned: boolean = false
): Promise<PostMeta[]> {
  let items: IndexItem[] = sortIndex(index).filter((item) => {
    if (filter?.date) return item.date.startsWith(filter.date)
    if (filter?.tag) return item.tags?.includes(filter.tag)
    if (filter?.tags) {
      if (item?.tags) {
        for (const tag of item.tags) {
          if (filter.tags.includes(tag)) return true
        }
        return false
      }
    }
    return true
  })

  if (pinned) items = [...pinnedItems, ...items]

  return await Promise.all(
    items.map(async (post) => await getPostByItem(post, false))
  )
}
