

import { defineDocumentType, makeSource } from 'contentlayer/source-files'

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
    url: { type: 'string', resolve: (doc) => `/blogs/${doc._raw.flattenedPath}` },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  disableImportAliasWarning: true,
})
