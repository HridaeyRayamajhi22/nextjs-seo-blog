import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";

const BlogLayout1 = ({ blog }) => {
  return (
    <div className="relative inline-block overflow-hidden rounded-xl">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/90 rounded-3xl z-10" />

      {/* Blog Image */}
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        height={blog.image.height}
        width={blog.image.width}
        className="w-full h-full object-cover object-center rounded-xl"
      />

      {/* Content */}
      <div className="absolute bottom-0 p-10 z-20 w-full">
        <Tag
          link={`/categories/${blog.tags[0]}`}
          name={blog.tags[0]}
          className="bg-green-600/95 px-6 text-sm py-2 !border"
        />

        <Link href={blog.url} className="mt-6 block">
          <h3 className="capitalize text-2xl font-bold text-lime-50">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayout1;
