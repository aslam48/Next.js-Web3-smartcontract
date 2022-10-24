import style from '../styles/Layout.module.css'
import Nav from './Nav'

const Layout = ({children}) => {
  return (
    <>
    <Nav/>
    <div className={style.container}>
            <main className={style.main}>
                {children}
            </main>
    </div>
    </>
  )
}

export default Layout