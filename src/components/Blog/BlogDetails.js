import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";

const BlogDetails = ({ blog, slug }) => {
  if (!blog) return null;
  return (
    <div className="px-6 md:px-10 bg-emerald-500 text-light py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 text-base md:text-xl font-medium mx-4 md:mx-10 rounded-lg shadow-md">
      {/* Published Date */}
      <time dateTime={blog.publishedAt} className="whitespace-nowrap">
        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
      </time>

      {/* Views (replace with dynamic later) */}
      <span className="text-sm md:text-base text-light/90 whitespace-nowrap">
        👀 10 views
      </span>

      {/* Reading Time */}
      {blog.readingTime?.text && (
        <div className="text-sm md:text-base whitespace-nowrap">
          ⏱ {blog.readingTime.text}
        </div>
      )}

      {/* Tags */}
      {blog.tags?.length > 0 && (
        <Link
          href={`/categories/${blog.tags[0]}`}
          className="px-3 py-1 rounded-md bg-white/20 hover:bg-white/30 transition-colors text-sm md:text-base"
        >
          #{blog.tags[0]}
        </Link>
      )}
    </div>
  );
};

export default BlogDetails;
