'use client'
import clsx from 'clsx'
import type { PostMeta } from '@/app/lib/content'
import Link from 'next/link'
import PostDate from '@/app/components/post-date'
import { Link as IconLink } from '@/app/icons'
import Image from 'next/image'

interface CardProps {
  post: PostMeta
  className?: string
}

const Card: React.FC<CardProps> = ({ className, post, ...rest }) => {
  return (
    <Link
      href={post.link ? post.link.href : `/${post.slug}`}
      className={clsx(
        'block border-2 border-[#2D394D] px-4 py-3 rounded-xl relative overflow-hidden bg-[#151B24] hover:border-white/30 hover:overflow-auto transition-all group',
        className
      )}
      {...rest}
    >
      {post.image && (
        <Image
          className="md:absolute -top-4 -right-4 h-40 w-40 rounded-xl object-cover mix-blend-luminosity object-left-bottom group-hover:mix-blend-normal group-hover:right-1 group-hover:top-1 transition-all group-hover:rounded-lg"
          src={post.image.src}
          alt={post.image.alt || post.title}
          width={600}
          height={600}
        />
      )}
      <div className="relative py-4 md:px-4">
        <div
          className={clsx('block mb-6 md:pr-12', {
            'md:w-3/4': post.image,
          })}
        >
          {post.link && (
            <span className="text-teal-200/50 flex items-center">
              <IconLink className="w-4 h-4 mr-2" />
              {post.link.label}
            </span>
          )}
          <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
          <p className="leading-relaxed text-slate-300">{post.description}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between text-teal-500">
          {post.tags && post.tags.length > 0 && (
            <ul className="flex space-x-3 text-sm font-bold">
              {post.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
          <PostDate className="text-white" dateString={post.date} />
        </div>
      </div>
    </Link>
  )
}

export default Card
