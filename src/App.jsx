import { Navbar, Hero, About } from "./components"
import { BrowserRouter } from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-slate-950">
        <div className="bg bg-black bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>  
      <About />
    </BrowserRouter>
  )
}

export default App
