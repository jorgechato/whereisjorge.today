import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.description}`}>
        <p>
          Page under{' '}
          <code className={styles.code}>construction</code>
        </p>
        <div>
          <a
            href="https://whatisjorgedoing.today"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <span className={`${styles.code} ${styles.glow}`}>Jorge Chato</span>
          </a>
        </div>
      </div>
    </main>
  )
}
