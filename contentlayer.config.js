import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import GithubSlugger from 'github-slugger'
import remarkSlug from 'remark-slug'
import remarkAutolinkHeadings from 'remark-autolink-headings'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    updatedAt: { type: 'date', required: true },
    image: { type: 'string', required: true },
    author: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    isPublished: { type: 'boolean' },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc: {
      type: 'json',
      resolve: (doc) => {
        const regularExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g
        const slugger = new GithubSlugger()
        const headings = Array.from(doc.body.raw.matchAll(regularExp)).map(
          ({ groups }) => {
            const flag = groups?.flag
            const content = groups?.content
            return {
              level:
                flag?.length == 1
                  ? 'one'
                  : flag?.length == 2
                  ? 'two'
                  : 'three',
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            }
          }
        )
            // Print full TOC to console like tutor’s video
        console.log(
          `TOC for ${doc._raw.flattenedPath}:`,
          JSON.stringify(headings, null, 2)
        )

        return headings
      },
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkSlug, remarkAutolinkHeadings],
  },
})
