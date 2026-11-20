import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MenuList from './components/MenuList'
import AdminAddDish from './components/AdminAddDish'
import Contact from './components/Contact'
import data from './data.json'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<MenuList dishes={data} />} />
        <Route path="/admin/add" element={<AdminAddDish />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App