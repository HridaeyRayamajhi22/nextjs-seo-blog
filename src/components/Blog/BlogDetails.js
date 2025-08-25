import { format } from 'date-fns'
import React from 'react'

const BlogDetails = ({blog,slug}) => {
  return (
    <div>
      <time>
         {format(parseISO(blog.publishedAT))}
      </time>
    </div>
  )
}

export default BlogDetails
