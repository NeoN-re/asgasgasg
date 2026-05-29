import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header/Header'
import { Body } from './components/Body/Body'
import { Footer } from './components/Footer/Footer'
import { Discography } from './pages/Discography/Discography'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/discography" element={<Discography />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  )
}

export default App