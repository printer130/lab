import styles from 'styles/Home.module.css'

export function Layout ({ children }) {
  return (
    <>
      <main className={styles.main}>
        {children}
      </main>
      <style jsx>{`
            main {
              padding: 0 1rem;
            }
        `}
      </style>
    </>
  )
}
