import createImageUrlBuilder from '@sanity/image-url'

const sanityClient = require('@sanity/client')

const client = sanityClient({
    projectId: 'zie4s3nj',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
});

const builder = createImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)

//npx sanity cors add http://localhost:3000
//add cors in sanity api tab
//sanity.io/manage
//https://delveroo.sanity.studio/ this is my deployed api link
export default client;