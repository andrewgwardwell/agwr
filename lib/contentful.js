import { createClient } from 'contentful';

const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
});

export async function getBlogPosts() {
  const response = await client.getEntries({ content_type: 'developerBlogPost' });
  return response.items;
}

export async function getBlogPostBySlug(slug) {
  const response = await client.getEntries({
    content_type: 'developerBlogPost',
    'fields.slug': slug,
  });
  return response.items[0];
}