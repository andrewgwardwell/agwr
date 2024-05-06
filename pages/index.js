import Head from 'next/head';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import Layout from '../components/layout';

export default function Home() {
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
    <div className="container">
    <div className='content'>
      <div className="image-holder">
      <div className='banner-wrapper' id='banner-wrapper' onMouseMove={(e) => handleMouseMove(e)}>
        <div className='banner design'>
          <div className='banner-content'>
            <img src='/images/andrew_200.jpeg' height="200"
        width="200"></img>
          </div>
        </div>
        <div className='banner dev' style={{width: `${delta}`}}>
          <div className='banner-content'>
            <img src='/images/andrew_old2.jpg' height="200"
        ></img>
          </div>
        </div>
      </div>
      </div>

      <h1>Andrew Wardwell</h1>
      <p>I have been a professional web developer since 2012, and have been self-employed since 2017.</p>
      <p>I built and launched <Link href="https://web.archive.org/web/20220622121133/https://www.mfavsmfa.com/" target="_blank"><a>MFA vs MFA</a></Link>, a comparison tool for creative writers exploring master of fine arts programs, in 2021 (now deprecated).</p>
      <p>I have done a lot of <Link href="https://www.edx.org/">GatsbyJs</Link>, <Link href="https://www.cipherbio.com/" target="_blank"><a >Angular</a></Link>, and <Link href="https://digitalguardian.com/" target="_blank"><a>Drupal</a></Link>, but I have also worked in Next, Astro, middleman, and Jekyll.</p>
      <p>I have worked on projects as the sole developer, as a member of a team and recently as an Engineering Manager. I enjoy sending hilarious gifs, but can also interface with stakeholders/customers.</p>
      <p><Link href="https://www.linkedin.com/in/andrewgwardwell/" target="_blank"><a>Connect or Contact</a></Link></p>
    </div>
    <div>

    </div>


    </div>
    </Layout>
  )
}
