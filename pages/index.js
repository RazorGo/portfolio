import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio_Divyanshu</title>
        <meta name="description" content="A portfolio page of Divyanshu Baghel." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://portfolio-eosin-sigma-51.vercel.app/">Divyanshu</a>
        </h1>

        <p className={styles.description}>
          Get to know me {' '}
          <code className={styles.code}>Lets begin</code>
        </p>

                  

        <div className={styles.grid}>
          
          <a  className={styles.card} href="https://drive.google.com/file/d/1GJncT9Iscr-lOJUVSIwz1yX6o_f7DPw-/view?usp=sharing"
              alt="alt text">
            <h2>Resume &rarr;</h2>
            <p>Dounload Resume form hear. My contacts are also included.</p>
          </a>

          <a href="https://www.linkedin.com/in/divyanshu-baghel-b9203317a/" className={styles.card}>
            <h2>Learn about me &rarr;</h2>
            <p>My name is Divyanshu Baghel. I am a final year student at Rungta ...</p>
          </a>

          <a
            href="https://github.com/RazorGo?tab=repositories"
            className={styles.card}
          >
            <h2>Personal Projects &rarr;</h2>
            <p>1. PizzaStore <br /> 2. NFT Punks <br /> 3. Online Service system ...</p>
          </a>

          <a
            href="https://mail.google.com/mail/u/0/#sent?compose=DmwnWtDkwGNxgjJQzDVbghlGvslJLbKFDXHgmTjhBRVWmHSVjTcVWDDQttZGgWxRPnwJMhHRwSbv"
            className={styles.card}
          >
            <h2>Contact me &rarr;</h2>
            <p> Click here to Say hi! to me , This will redirect you to a Gmail</p>
          </a>
          </div>
      </main>

      <footer className={styles.footer}>
        <a>
          Hope to see You again
        </a>
      </footer>
    </div>
  )
}
