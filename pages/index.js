import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import Layout from '../components/layout';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faExternalLink
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <Layout>    
    <Head>
      <title>Andrew Wardwell</title>

      <link rel="icon" href="/images/andrew_200.jpeg"/>
    </Head>
    <div className="container">
    <div id="flashlight"></div>
    <canvas id="fullpage_canvas"></canvas>
    <div className='content'>
      <div className="image-holder">
      <Image
        src="/images/andrew_200.jpeg"
        height={200}
        width={200}
      ></Image>
      </div>

      <h1>Andrew Wardwell</h1>
      <p>I have been a web developer since 2012, and working as a freelancer since 2017.</p>
      <p>I built and launched <Link href="https://www.mfavsmfa.com/" target="_blank"><a>MFA vs MFA</a></Link>, a comparison tool for creative writers exploring master of fine arts programs, in 2021.</p>
      <p>I have done a lot of <Link href="https://www.cipherbio.com/" target="_blank"><a >Angular</a></Link>, and a lot of <Link href="https://digitalguardian.com/" target="_blank"><a>Drupal</a></Link>, but I have also worked in wordpress, React, middleman, Jekyll, .Net, and more.</p>
      <p>I am happy working solo, or on a team. I enjoy sending hilarious gifs, but can also interface with stakeholders/customers.</p>
      <p>Everything else you <bold>need</bold> to know about me you can find <Link href="https://bit.ly/3KljeKQ" target="_blank"><a>here</a></Link>.</p>
      <p><Link href="https://www.linkedin.com/in/andrewgwardwell/" target="_blank"><a>Connect or Contact</a></Link></p>
    </div>
    <div>

    </div>


    </div>
    </Layout>
  )
}
