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
    <div className="col-span-8 font-in prose prose-lg max-w-max prose-blockquote:bg-yellow-300/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-blue-900 prose-blockquote:rounded-r-lg prose-li:marker:text-blue-700 dark:text-light">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
