import styles from './Header.module.scss'
import Container from '@components/Container/Contaner';
const Header = () => {
  return (
    <header className={styles.header}>
     <Container className={styles.headerContainer}>
      <p className={styles.headerTitle}>Weezy&apos;s Store</p>
      <p className='text-white'>$0.00</p>
      </Container>
    </header>
  )
}
export default Header;