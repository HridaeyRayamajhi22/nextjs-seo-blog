import { sortBlogs } from '@/src/utils'
import React from 'react'

const HomeCoverSection = ({blogs}) => {

    const sortedBlogs = sortBlogs(blogs);
    const blog = sortBlogs[0]
  return (
    <article>
        
    </article>
  )
}

export default HomeCoverSection
