import './App.scss'
import Header from "./Header/header.tsx";
import Home from "./Home/home.tsx";
import Footer from "./Footer/footer.tsx";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";


function App() {
  return (
      <div className="container">
          <Header/>
          <main className="main-container">
              <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="*" element={<Navigate to="/error" />} />
              </Routes>
          </main>
          <Footer/>
      </div>
  )
}

export default App
