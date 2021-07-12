import styles from '../styles/Home.module.css'
import Index from "../components/landing/Index"
import Head from 'next/head'
// 
export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="styleSheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <link
          rel="styleSheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className={styles.container}>
        <Index />
      </div>
    </>
  )
}
