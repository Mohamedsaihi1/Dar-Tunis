import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MenuList from './components/MenuList'
import AdminAddDish from './components/AdminAddDish'
import data from './assets/data.json'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Bienvenue</h1>} />
        <Route path="/dishes" element={<MenuList dishes={data} />} />
        <Route path="/admin/add" element={<AdminAddDish />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </>
  )
}

export default App