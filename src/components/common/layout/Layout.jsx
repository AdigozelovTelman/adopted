
import Footer from '../footer/Footer'
import Header from '../header/Header'
import styles from './Layout.module.scss'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout