import { Navbar, Hero } from "./components"
import { BrowserRouter } from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-slate-950">
        <div className="bg bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
