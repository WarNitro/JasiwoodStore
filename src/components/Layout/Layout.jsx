import Header from "./Header/Header.jsx"
import Nav from "./Nav/Nav.jsx"
import Footer from "./Footer/Footer.jsx"
import { Outlet } from "react-router-dom"

function Layout() {

  return (
    <>
        <Header />
        <Nav />
        <main className="p-4" style={{ backgroundImage: "url(/jasiwoodstore/img/background.jpg)", backgroundSize: 'cover', backgroundPosition: "center", minHeight: '100vh'  }}>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout