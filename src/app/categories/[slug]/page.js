import { allBlogs } from "@/.contentlayer/generated";
import Categories from "@/src/components/Blog/Categories";
import { slug } from "github-slugger";
import Link from "next/link";
import GithubSlugger from 'github-slugger'

const slugger = new GithubSlugger()
export async function generateStaticParams() {
   const categories = []
   const paths = [{slug: "all"}]

   allBlogs.map(blog => {
     if(blog.isPublished){
       blog.tags.map(tag => {
         let slugified = slugger.slug(tag);
         if(!categories.includes(slugified)){
           categories.push(slugified)
           paths.push({ slug: slugified})
         }
       }) 
     }
   })
 
  return paths
}

const CategoryPage = ({ params }) => {
  // Collect unique categories
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) =>
    blog.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) allCategories.push(slugified);
      return params.slug === "all" ? true : slugified === params.slug;
    })
  );

  return (
    <article className="max-w-6xl mx-auto px-4 md:px-0 py-8">
      {/* Page Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          #{params.slug}
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Discover more categories and expand your ideas
        </p>
      </header>

      {/* Categories Bar */}
      <section className="mb-8">
        <Categories categories={allCategories} currentSlug={params.slug} />
      </section>

      {/* Blog List */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="relative w-full overflow-hidden rounded-xl group cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            {blog.image && (
              <div className="relative w-full aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={blog.image.replace("../public", "")}
                  alt={blog.title}
                  className="object-cover object-center w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/80 rounded-xl z-10" />
              </div>
            )}

            {/* Content */}
            <div className="absolute bottom-0 p-4 md:p-6 w-full z-20 flex flex-col justify-end bg-gradient-to-t from-dark/80 via-transparent to-transparent rounded-b-xl">
              {blog.tags?.length > 0 && (
                <Link
                  href={`/categories/${slug(blog.tags[0])}`}
                  className="absolute bottom-4 right-4 text-sm md:text-base font-medium text-violet-400 hover:text-violet-200 transition-colors duration-300"
                >
                  #{blog.tags[0]}
                </Link>
              )}

              <Link href={blog.url} className="block">
                <h2 className="capitalize text-lg md:text-2xl font-bold text-lime-50 leading-snug">
                  <span className="bg-gradient-to-r from-violet-500 to-violet-400 bg-[length:0px_4px] md:bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                    {blog.title}
                  </span>
                </h2>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {blogs.length === 0 && (
        <p className="text-center text-gray-500 mt-12">
          No blogs found for this category.
        </p>
      )}
    </article>
  );
};

export default CategoryPage;
