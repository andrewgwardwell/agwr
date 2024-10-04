import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getBlogPosts} from '../lib/contentful';
import styles from '../styles/Home.module.scss';

export async function getStaticProps() {
  const posts = await getBlogPosts();
  return {
    props: {posts: posts}
  };
}

export default function Home({posts}) {

  return (
    <Layout>    
    <Head>
      <title>Andrew Wardwell</title>
      <meta name="description" content="Andrew Wardwell, FE developer" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Andrew Wardwell" key="title" />
      <meta property="og:description" content="Andrew Wardwell, FE developer" key="description" />
      <meta property="og:image" content="/images/andrew_200.jpeg" key="image" />
      <meta property="og:url" content="https://www.andrewwardwell.com/" key="url" />
      <meta property="og:type" content="website" key="type" />
      <meta property="og:site_name" content="Andrew Wardwell" key="site_name" />
      <meta property="og:locale" content="en_US" key="locale" />
      <meta property="og:locale:alternate" content="en_CA" key="locale_alt" />
      <meta property="og:locale:alternate" content="en_GB" key="locale_alt2" />
      <meta property='og:keyworks' content='seo optimization, technical seo, front end developer, angularjs, gatsbyjs, nextjs, drupal, wordpress, jekyll, middleman' key='keywords' />
      <link rel="icon" href="/images/andrew_200.jpeg"/>
    </Head>


        <p>I have been a professional web developer since 2012, and have been self-employed since 2017.</p>
        <p>I built and launched <Link href="https://web.archive.org/web/20220622121133/https://www.mfavsmfa.com/" target="_blank"><a>MFA vs MFA</a></Link>, a comparison tool for creative writers exploring master of fine arts programs, in 2021 (now deprecated).</p>
        <p>I have done a lot of React (<Link href="https://aerospike.com/">Astro</Link>, <Link href="https://www.edx.org/">GatsbyJs</Link>, <Link href="https://linksquares.com/">Next</Link>), <Link href="https://www.cipherbio.com/" target="_blank"><a >Angular</a></Link>, and <Link href="https://digitalguardian.com/" target="_blank"><a>Drupal</a></Link>, but I have also worked in middleman, wordpress, and Jekyll.</p>
        <p>I have worked on projects as the sole developer, as a member of a team and recently as an Engineering Manager. I enjoy sending hilarious gifs, but can also interface with stakeholders/customers.</p>
        {posts.map((post) => (
          <article key={post.sys.id}>
            <Link href={`/${post.fields.slug}`}>
              <div className={styles.postWrapper}>
                <h2>{post.fields.title}</h2>
                <p>{post.fields.teaser}</p>
                <p className="date">{new Date(post.fields.publishedDate).toLocaleDateString()}</p>
                <Link href={`/${post.fields.slug}`}>
                  <a>Read more...</a>
                </Link>
              </div>
            </Link>
          </article>
        ))}

    </Layout>
  )
}
