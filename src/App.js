import './App.css'

import { Navbar } from './components'
import {
  AboutUs,
  Footer,
  Header,
  SpecialMenu,
} from './container'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Footer />
    </div>
  )
}

export default App
