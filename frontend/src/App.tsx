import './App.scss'
import Header from "./Header/header.tsx";
import Home from "./Home/home.tsx";
import Footer from "./Footer/footer.tsx";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Contact from "./Contact/contact.tsx";


function App() {
  return (
      <div className="container">
          <Header/>
          <main className="main-container">
              <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="*" element={<Navigate to="/error" />} />
                    <Route path="/contact" element={<Contact/>} />
              </Routes>
          </main>
          <Footer/>
      </div>
  )
}

export default App
