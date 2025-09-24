

"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
  Image,
};

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);
  return (
    <div
      className="
        col-span-8 font-in prose prose-lg max-w-max
        dark:prose-invert
        prose-li:marker:text-blue-700

        /* Light mode blockquote (same as before) */
        prose-blockquote:bg-yellow-300/20
        prose-blockquote:p-2
        prose-blockquote:px-6
        prose-blockquote:border-blue-900
        prose-blockquote:rounded-r-lg

        /* Dark mode blockquote */
        dark:prose-blockquote:bg-dark
        dark:prose-blockquote:border-accentDark
        dark:prose-blockquote:text-light
        dark:prose-blockquote:rounded-lg
        dark:prose-blockquote:px-6
        dark:prose-blockquote:py-3
      "
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
