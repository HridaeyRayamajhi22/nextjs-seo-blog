import { allBlogs } from "@/.contentlayer/generated";
import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/Elements/Tag";
import Image from "next/image";

export default async function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-center">
        <p className="text-lg md:text-2xl text-gray-400">
          Sorry, this blog post doesn’t exist.
        </p>
      </div>
    );
  }

  return (
    <article className="w-full">
      {/* Header Section with Background Image */}
      <div className="mb-8 text-center relative w-full h-[40vh] md:h-[70vh] bg-dark rounded-xl overflow-hidden">
        {/* Overlay + Centered Content */}
        <div className="w-full z-10 flex flex-col items-center justify-center absolute inset-0 px-4">
          {/* Blog Tag */}
          {blog.tags?.length > 0 && (
            <Tag
              name={blog.tags[0]}
              link={`/categories/${blog.tags[0]}`}
              className="px-4 md:px-6 text-xs md:text-sm py-1.5 md:py-2 bg-lime-950"
            />
          )}

          {/* Blog Title */}
          <h1 className="mt-4 md:mt-6 font-semibold capitalize text-light text-2xl sm:text-3xl md:text-5xl leading-snug md:leading-normal max-w-3xl">
            {blog.title}
          </h1>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-dark/60 z-[1]" />

        {/* Background Image */}
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          priority
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Blog Content Section (example, can add MDX rendering here later) */}
      <div className="prose prose-invert max-w-3xl mx-auto px-4 md:px-0 text-base md:text-lg leading-relaxed">
        <BlogDetails blog={blog} slug={params.slug} />
      </div>

      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
        <div className="col-span-4">asd</div>
        <RenderMdx blog={blog} />
      </div>
    </article>
  );
}
