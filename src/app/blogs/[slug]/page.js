import { allBlogs } from "@/.contentlayer/generated";
import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/Elements/Tag";
import { slug } from "github-slugger";
import Image from "next/image";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({slug: blog._raw.flattenedPath}));
}
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
              link={`/categories/${slug(blog.tags[0])}`}
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
        <aside className="lg:col-span-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-4 text-gray-100 shadow-xl border border-gray-600/30 sticky top-20 self-start max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-700/60">
            <div className="p-1.5 bg-lime-500/10 rounded-md">
              <svg
                className="w-4 h-4 text-lime-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <h2 className="text-base font-semibold tracking-wide uppercase text-gray-200">
              Table of Contents
            </h2>
          </div>

          {/* TOC List */}
          <nav className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-400/20 via-gray-600/30 to-transparent"></div>

            <ul className="space-y-1 relative text-sm md:text-base">
              {blog.toc.map((heading) => (
                <li key={heading.slug} className="group relative">
                  <a
                    href={`#${heading.slug}`}
                    className={`
              flex items-start transition-all duration-200 ease-out
              px-3 py-2 rounded-lg border border-transparent
              group-hover:border-lime-400/30 group-hover:bg-gray-800/50
              group-hover:translate-x-1
              ${
                heading.level === "one"
                  ? "font-semibold text-gray-100 bg-gray-800/40"
                  : heading.level === "two"
                  ? "ml-4 text-gray-300"
                  : "ml-8 text-gray-400 text-xs"
              }
            `}
                  >
                    {/* Dot indicator */}
                    <div
                      className={`
                absolute left-2 top-1/2 transform -translate-y-1/2
                w-1.5 h-1.5 rounded-full transition-all duration-200
                ${
                  heading.level === "one"
                    ? "bg-lime-400 group-hover:scale-125"
                    : heading.level === "two"
                    ? "bg-gray-500 group-hover:bg-lime-400"
                    : "bg-gray-600 group-hover:bg-lime-400"
                }
              `}
                    ></div>
                    <span className="ml-3 leading-tight">{heading.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="mt-4 pt-2 border-t border-gray-700/60 text-[11px] text-gray-500 text-center">
            {blog.toc.length} sections
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
