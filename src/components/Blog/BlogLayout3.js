import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import React from "react";

const BlogLayout3 = ({ blog }) => {
  return (
    <div className="flex flex-col w-full text-dark">
      {/* Blog Image */}
      <Link href={blog.url} className="w-full">
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <Image
            src={blog.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            fill
            className="object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>

      {/* Blog Content */}
      <div className="w-full mt-4 flex flex-col items-start">
        {/* Tag */}
        <span className="uppercase text-accent font-semibold text-xs sm:text-sm tracking-wide">
          {blog.tags[0]}
        </span>

        {/* Title */}
        <Link href={blog.url} className="inline-block mt-1">
          <h3 className="capitalize text-base sm:text-lg font-semibold text-accentDark-300 leading-snug">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_4px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h3>
        </Link>

        {/* Date */}
        <span className="capitalize text-dark/50 font-medium text-xs sm:text-sm mt-1">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayout3;
