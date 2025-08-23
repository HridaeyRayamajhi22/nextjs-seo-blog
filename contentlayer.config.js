import { makeSource,defineDocumentType } from 'contentlayer-source-notion'

const Doc = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '**/**/*.md',
  fields: {
    title: {
      type: 'string',
    },
    publishAt:{
      type: 'date',
      required: true,
    },
     updatedAt:{
      type: 'date',
      required: true,
    },
     description:{
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: true
    },
    isPublished: {
      type: 'boolean',
    },
     author:{
      type: 'string',
      required: true,
    },
    tags:{
      type: 'list',
      of: {type: 'string'},
    }
  },
   computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
  },
}))
 
export default makeSource({
  /* options */
  contentDirPath: 'content',
  DocumentType: [Blog]
})