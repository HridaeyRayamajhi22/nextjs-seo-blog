import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import React from 'react'

const BlogDetails = ({blog,slug}) => {
    console.log(blog)
  return (
    <div className='px-10 bg-emerald-500 text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg'>
      <time>
         {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
      </time>
      <span>10 views</span>
      <div>
         {blog.readingTime.text}
      </div>
      <Link href={`/categories/${blog.tags[0]}`}
       className='m-3'
      >
        #{blog.tags[0]}
      </Link>
    </div>
  )
}

export default BlogDetails
