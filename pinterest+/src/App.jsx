import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import HomePage from "./pages/home";
import Ideas from "./pages/idea";
import Explore from "./pages/explore";
import Create from "./pages/builder";

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
      <Route path = "explore" element = {<Explore />} />
      <Route path = "builder" element = {<Create />} />
    </Routes>
  </Router>
  )
}

export default App
