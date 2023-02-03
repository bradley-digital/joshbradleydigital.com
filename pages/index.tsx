import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josh Bradley Digital</title>
        <meta name="description" content="Josh Bradley Digital is a web development agency building scalable systems for the backend of marketing." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <Image src="/jbd-logo.svg" alt="Josh Bradley Digital Logo" width={164} height={48} />
        </div>

        <p className={styles.description}>
          This site is under construction.<br />To see my work visit <a href="//joshbradley.me">joshbradley.me</a>.
        </p>
      </main>
    </div>
  )
}
