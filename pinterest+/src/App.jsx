import './App.css'
import { Header } from "./components/header"
import { Sidebar } from './components/sidebar'
import { Pins } from './components/pins'

function App() {

  return (
    <>
      <Sidebar />
      <Header />
      <Pins />
    </>
  )

}

export default App
