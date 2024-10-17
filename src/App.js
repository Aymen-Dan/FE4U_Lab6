import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Weather from './weather';
import Display from './display';
import './css/App.css';
import './css/weather_page.css';
import { useEffect, useState } from 'react';



function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/weather" element={<Weather/>} />
          <Route path="/display" element={<Display/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}




export default App