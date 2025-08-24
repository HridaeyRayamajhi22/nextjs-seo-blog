import { sortBlogs } from '@/src/utils';
import React from 'react'

const FeaturedPosts = ({blogs}) => {
     const sortedBlogs = sortBlogs(blogs);
  return (
    <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
        <h2 className='w-full inline-block font-bold capitalize text-4xl'>Featured Posts</h2>


    </section>
  )
}

export default FeaturedPosts
