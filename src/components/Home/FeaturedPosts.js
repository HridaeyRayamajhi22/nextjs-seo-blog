import { sortBlogs } from '@/src/utils';
import React from 'react';
import BlogLayout1 from '../Blog/BlogLayout1';
import BlogLayout2 from '../Blog/BlogLayout2';

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-32 px-4 md:px-16 lg:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full font-bold capitalize text-3xl md:text-4xl mb-8 text-center md:text-left dark:text-light">
        Featured Posts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Big Card */}
        <article className="relative md:row-span-2">
          <BlogLayout1 blog={sortedBlogs[7]} />
        </article>

        {/* Small Cards */}
        <div className="grid grid-cols-1 gap-6">
          <article className="relative">
            <BlogLayout2 blog={sortedBlogs[2]} />
          </article>
          <article className="relative">
            <BlogLayout2 blog={sortedBlogs[3]} />
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
