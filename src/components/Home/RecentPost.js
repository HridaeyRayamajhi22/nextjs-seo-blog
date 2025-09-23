import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";
import BlogLayout3 from "../Blog/BlogLayout3";

const RecentPost = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-32 px-4 md:px-16 lg:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col md:flex-row md:justify-between items-center md:items-end mb-8">
        <h2 className="font-bold capitalize text-3xl md:text-4xl text-center md:text-left dark:text-light">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="mt-4 md:mt-0 inline-block font-medium text-accent underline underline-offset-2 text-lg hover:text-teal-400"
        >
          See More
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 w-full">
        {sortedBlogs.slice(5, 11).map((blog, index) => (
          <article key={blog.url || index} className="relative">
            <BlogLayout3 blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentPost;
