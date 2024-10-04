import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getBlogPosts, getBlogPostBySlug } from '../lib/contentful';
import Layout from '../components/layout';

export async function getStaticPaths() {
  const posts = await getBlogPosts();
  const paths = posts.map((post) => {
    return {
      params: { slug: post.fields.slug },
    };
  });
  return {
    paths,
    fallback: false, // Set to true if you want incremental static generation
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = await getBlogPostBySlug(slug);

  return {
    props: {
      post: post,
    },
  };
}

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="custom-h1">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="custom-h2">{children}</h2>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="custom-paragraph">{children}</p>,
  },
};

const Blog = ({post}) => {
  console.log(post);
  const { title, content, slug } = post.fields;
  return (
    <Layout>
    <div className="blog-post-container">
      <h1 className="blog-post-title">{title}</h1>
      {/* <p className="blog-post-date">{new Date(date).toLocaleDateString()}</p> */}

      <div className="blog-post-content">
        {documentToReactComponents(content, options)} {/* Rendering rich text */}
      </div>
    </div>
    </Layout>
  );
};

export default Blog;
