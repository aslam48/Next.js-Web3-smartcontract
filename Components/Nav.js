import NavStyle from '../styles/Nav.module.css'
import Link from 'next/link'
import {AiOutlineBlock} from "react-icons/ai"


const Nav = () => {
  return (
    <nav className={NavStyle.nav}>

  
        <ul>
            <li>
                <Link href='/'><AiOutlineBlock className={NavStyle.icon}/></Link>
            </li>
            {/* home side */}

        </ul>
   

    <div className={NavStyle.fooat_Nav_left}>
              <li>
                <Link href='/about'>Buy</Link> 
            </li>

            <li>
                <Link href='/about'>Deposit</Link> 
            </li>

            <li className={NavStyle.Get_started}>
                <Link href='/Get_Started'>Get Started</Link> 
            </li>
        </div>
       
    </nav>
  )
}

export default Nav