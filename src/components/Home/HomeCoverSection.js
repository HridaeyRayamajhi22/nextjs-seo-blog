import { sortBlogs } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs?.[4];

  if (!blog) return null;

  const imageSrc = blog.image.filePath.startsWith("../public")
    ? blog.image.filePath.replace("../public", "")
    : blog.image.filePath;

  return (
    <div className="w-full">
      <article className="mx-10 h-[85vh] relative rounded-3xl overflow-hidden">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full 
        bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl -z-10
        "
        />
        <Image
          src={imageSrc}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="object-cover object-center"
        />

        <div className="w-3/4 h-full flex flex-col items-start justify-end p-8 md:p-16 relative z-10 text-light">
          <Tag
            link={`/categories/${blog.tags[0]}`}
            name={blog.tags[0]}
            className=" bg-green-500/10 text-dark"
          />

          <Link href={blog.url} className="mt-6">
            <h1 className="capitalize text-4xl font-bold">
              <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="inline-block mt-4 text-xl font-in">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
