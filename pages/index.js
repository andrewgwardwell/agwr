import Head from 'next/head';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import Layout from '../components/layout';


// document.addEventListener('DOMContentLoaded', function(){
//   let banner = document.getElementById('banner-wrapper');
//   let devLayer = banner.querySelector('.dev');
//   let delta = 0;

//   banner.addEventListener('mousemove', );
// })

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
      <p>I built and launched <Link href="https://www.mfavsmfa.com/" target="_blank"><a>MFA vs MFA</a></Link>, a comparison tool for creative writers exploring master of fine arts programs, in 2021.</p>
      <p>I have done a lot of <Link href="https://www.cipherbio.com/" target="_blank"><a >Angular</a></Link>, and a lot of <Link href="https://digitalguardian.com/" target="_blank"><a>Drupal</a></Link>, but I have also worked in wordpress, React, middleman, Jekyll, .Net, and more.</p>
      <p>I am happy working solo, or on a team. I enjoy sending hilarious gifs, but can also interface with stakeholders/customers.</p>
      <p>Everything else you <strong>need</strong> to know about me you can find <Link href="https://bit.ly/3KljeKQ" target="_blank"><a>here</a></Link>.</p>
      <p><Link href="https://www.linkedin.com/in/andrewgwardwell/" target="_blank"><a>Connect or Contact</a></Link></p>
    </div>
    <div>

    </div>


    </div>
    </Layout>
  )
}
