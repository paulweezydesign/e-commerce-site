import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
       &copy; Hyper Bros. Trading Cards, {new Date().getFullYear()}
      </footer>
    </>
  )
}
