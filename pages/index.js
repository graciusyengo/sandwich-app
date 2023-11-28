import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Featured from '@/component/Featured'
import SandwichList from '@/component/SandwichList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sandwich-app</title>
        <meta name="description" content="App sandwich" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
       <Featured/>
       <SandwichList/>
   
      </main>
    </>
  )
}
