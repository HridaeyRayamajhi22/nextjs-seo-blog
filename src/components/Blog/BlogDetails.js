import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  if (!blog) return null;

  return (
    <div className="px-4 md:px-6 bg-emerald-500 text-light py-3 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6 text-base md:text-lg font-medium mx-auto rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Published Date */}
      <time
        dateTime={blog.publishedAt}
        className="whitespace-nowrap transition-colors duration-300 hover:text-violet-200"
      >
        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
      </time>

      {/* Views (placeholder) */}
      <span className="text-sm md:text-base text-light/90 whitespace-nowrap transition-colors duration-300 hover:text-violet-200">
        👀 <ViewCounter slug={blogSlug}/>
      </span>

      {/* Reading Time */}
      {blog.readingTime?.text && (
        <div className="text-sm md:text-base whitespace-nowrap transition-colors duration-300 hover:text-violet-200">
          ⏱ {blog.readingTime.text}
        </div>
      )}

      {/* Tags */}
      {blog.tags?.length > 0 && (
        <Link
          href={`/categories/${slug(blog.tags[0])}`}
          className="px-3 py-1 rounded-md bg-white/20 hover:bg-violet-500/30 transition-all text-sm md:text-base font-semibold"
        >
          #{blog.tags[0]}
        </Link>
      )}
    </div>
  );
};

export default BlogDetails;
