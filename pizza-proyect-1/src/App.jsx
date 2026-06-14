import './App.css'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { Footer } from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
