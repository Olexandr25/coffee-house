import './App.css'

import { Navbar } from './components'
import {
  AboutUs,
  FindUs,
  Footer,
  Gallery,
  Header,
  SpecialMenu,
} from './container'

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}

export default App
