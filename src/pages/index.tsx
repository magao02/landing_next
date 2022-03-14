import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../sections/header'
import Banner from '../sections/banner'
import Features from '../sections/features'
import Price from '../sections/price'
import Services from '../sections/services'
import Partners from '../sections/partners'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Mago landing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Banner></Banner>
      <Features></Features>
      <Price></Price>

      <Partners></Partners>


    </div>
  )
}
