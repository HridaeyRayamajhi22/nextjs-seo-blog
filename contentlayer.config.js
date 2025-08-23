import { makeSource,defineDocumentType } from 'contentlayer-source-notion'

const Doc = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '**/*.md',
  fields: {
    title: {
      type: 'string',
    },
  },
}))
 
export default makeSource({

  /* options */
  contentDirPath: 'content',
})