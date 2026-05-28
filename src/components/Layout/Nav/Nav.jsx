import styles from './Nav.module.css'
import { Link } from "react-router-dom"

function Nav() {

  return (
    <nav className={styles.nav}>
        <ul> 
            <li><Link to="/jasiwoodstore/">Inicio</Link></li>
            <li><Link to="/jasiwoodstore/productos">Productos</Link></li>
            <li><Link to="/jasiwoodstore/contacto">Contacto</Link></li>
            <li><Link to="/jasiwoodstore/carrito">Carrito</Link></li>
            <li><Link to="/jasiwoodstore/admin">Admin</Link></li>
        </ul>
    </nav>
  )
}

export default Nav
