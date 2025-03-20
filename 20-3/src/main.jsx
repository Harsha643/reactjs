import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {Header} from './comp/header.jsx'
import {  Nav } from './comp/nav.jsx'
import Cal from './comp/cal.jsx'
import Cards from './comp/cards.jsx'
import { Footer } from './comp/footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Nav />
    <Cal />
    <Header />
    <Cards />
    <Footer />

  </StrictMode>,
)
