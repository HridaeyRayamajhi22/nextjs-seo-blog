import { sortBlogs } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs?.[3];

  if (!blog) return null;

  const imageSrc = blog.image.filePath.startsWith("../public")
    ? blog.image.filePath.replace("../public", "")
    : blog.image.filePath;

  return (
    <div className="w-full">
      <article className="mx-10 h-[85vh] relative rounded-3xl overflow-hidden">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full 
        bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl -z-10
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

        <div className="w-3/4 p-16 flex flex-col items-start justify-center z-0 text-light">
          <Link href={`/categories/${blog.tags[3]}`}>
            {blog.tags[3]}
          </Link>
          <h1>
            {blog.title}
          </h1>
          <p>
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
