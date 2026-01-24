import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import HomePage from "./pages/home";
import Ideas from "./pages/idea";

import { Header } from "./components/header"
import { Sidebar } from './components/sidebar'


function App() {

  return (
  <Router>
    <Header />
    <Sidebar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="ideas" element={<Ideas />} />
    </Routes>
  </Router>
  )
}

export default App
