import Image from 'next/image'
import {allBlogs} from "contentlayer/generated"
import HomeCoverSection from '../components/Home/HomeCoverSection'
import FeaturedPosts from '../components/Home/FeaturedPosts'
import RecentPost from '../components/Home/RecentPost'

export default function Home() {
  console.log(allBlogs)
  return (
    <main className="flex flex-col items-center justify-center">
       <HomeCoverSection blogs={allBlogs} />
       <FeaturedPosts blogs={allBlogs} />
       <RecentPost blogs={allBlogs} />
    </main>
  )
}
