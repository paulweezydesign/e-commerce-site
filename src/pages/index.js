import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '@components/Header/Header'
import Footer from '@components/Footer'
import Container from '@components/Container/Contaner'
import Button from '@components/Button/Button'
import products from '@data/products.json'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
  
      </Head>
      <Header  />
      <main>
      <Container className=''>
        <h1 className='text-3xl font-bold'>Hyper Bros. Trading Cards </h1>
        <h2 className='text-xl  font-bold mt-4'>Available Cards</h2>
        <ul className={styles.products}>
        {products.map(product => {
          return (
            <li key={product.id}>
        <Image width={"864px"} height={'1200px'} src={product.image} alt={`Card of ${product.title}`} />
        <h3 className='text-[1.2em] font-bold mt-2 '>{product.title}</h3>
        <p className='mt-1'>{product.price}</p>
        <Button className='mt-2'>Add to Cart</Button>
        </li>
          )
        })}
        
        
        </ul>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
