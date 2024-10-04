import Head from 'next/head';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import Layout from '../components/layout';

export default function Home({posts}) {
  const [delta, setDelta] = useState(0);

  const handleMouseMove = useCallback((e) => {
    let offset = e.currentTarget.offsetLeft;
    let calc = e.clientX -  offset;
    let final = calc + 'px';
    console.log(final);
    setDelta(final);
  }, [])

  return (
    <Layout>    
    <Head>
      <title>Andrew Wardwell | About</title>
      <meta name="description" content="Andrew Wardwell, FE developer" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Andrew Wardwell" key="title" />
      <meta property="og:description" content="About Andrew Wardwell, FE developer" key="description" />
      <meta property="og:image" content="/images/andrew_200.jpeg" key="image" />
      <meta property="og:url" content="https://www.andrewwardwell.com/about" key="url" />
      <meta property="og:type" content="website" key="type" />
      <meta property="og:site_name" content="Andrew Wardwell" key="site_name" />
      <meta property="og:locale" content="en_US" key="locale" />
      <meta property="og:locale:alternate" content="en_CA" key="locale_alt" />
      <meta property="og:locale:alternate" content="en_GB" key="locale_alt2" />
      <meta property='og:keyworks' content='seo optimization, technical seo, front end developer, angularjs, gatsbyjs, nextjs, drupal, wordpress, jekyll, middleman' key='keywords' />
      <link rel="icon" href="/images/andrew_200.jpeg"/>
    </Head>

    <div className="container">
      

    </div>

    </Layout>
  )
}
