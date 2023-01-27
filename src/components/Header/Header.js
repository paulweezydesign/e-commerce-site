import styles from './Header.module.scss'
import { FaShoppingCart } from 'react-icons/fa'
import Container from '@components/Container/Contaner';
const Header = () => {
  return (
    <header className={styles.header}>
     <Container className={styles.headerContainer}>
      <p className={styles.headerTitle}>Hyper Bros. Trading Cards</p>
      <p className='text-white flex items-center'>
      <FaShoppingCart className='mr-4' />
      $0.00</p>
      </Container>
    </header>
  )
}
export default Header;