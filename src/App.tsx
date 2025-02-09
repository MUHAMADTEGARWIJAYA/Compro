import './App.css'
import { useEffect } from 'react';
import LandingPage from './Pages/LandingPage'
import {Routes ,Route } from 'react-router-dom'
function App() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/home' element=<LandingPage />/>
      </Routes>

    </div>
  )
}

export default App
