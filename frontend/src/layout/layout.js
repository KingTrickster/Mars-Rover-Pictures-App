import Footer from '../components/footer/footer'
import Header from '../components/header/header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='rover-pictures-content'>{children}</div>
      <Footer />
    </>
  )
}

export default Layout