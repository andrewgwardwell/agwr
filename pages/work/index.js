import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from '../../components/layout';

export default function Work() {
  return (
    <Layout>    
    <Head>
      <title>Work</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <div className="container">

    <div>
      <Image
        src="/images/andrew_200.jpeg"
        height={200}
        width={200}
      ></Image>
      <h1>Work</h1>
      <h2>
        <Link href="/">
          <a>back home</a>
        </Link>
      </h2>
    </div>


    </div>
    </Layout>
  )
}
