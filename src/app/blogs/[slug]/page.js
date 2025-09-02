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
      {/* ===== Blog Header Section ===== */}
      <header className="mb-12 relative w-full h-[40vh] md:h-[70vh] rounded-xl overflow-hidden shadow-lg">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
          {blog.tags?.length > 0 && (
            <Tag
              name={blog.tags[0]}
              link={`/categories/${blog.tags[0]}`}
              className="px-5 py-2 bg-lime-800 text-sm md:text-base font-medium rounded-full"
            />
          )}
          <h1 className="mt-4 md:mt-6 font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-snug max-w-3xl">
            {blog.title}
          </h1>
        </div>

        {/* Background Image */}
        <Image
          src={blog.image.replace("../public", "")}
          alt={blog.title}
          fill
          priority
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </header>

      {/* ===== Blog Meta (Details) ===== */}
      <section className="max-w-4xl mx-auto px-4 md:px-0">
        <BlogDetails blog={blog} slug={params.slug} />
      </section>

      {/* ===== Blog Content with Sidebar ===== */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 max-w-6xl mx-auto px-4 md:px-0">
        {/* Sidebar */}
        <aside className="lg:col-span-4 bg-gray-900/80 rounded-xl p-6 text-gray-100 flex flex-col gap-6 shadow-lg">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">About the Author</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Add author bio, related posts, categories, or newsletter sign-up here. You can customize it however you like!
          </p>

          <div>
            <h3 className="text-lg font-medium mb-2">Related Posts</h3>
            <ul className="space-y-1">
              <li className="hover:text-lime-400 cursor-pointer transition-colors">Blog Post 1</li>
              <li className="hover:text-lime-400 cursor-pointer transition-colors">Blog Post 2</li>
              <li className="hover:text-lime-400 cursor-pointer transition-colors">Blog Post 3</li>
            </ul>
          </div>
        </aside>

        {/* Main Content (MDX Renderer) */}
        <main className="lg:col-span-8 prose prose-invert max-w-none text-base md:text-lg leading-relaxed">
          <RenderMdx blog={blog} />
        </main>
      </section>
    </article>
  );
}
