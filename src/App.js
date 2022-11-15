import React from 'react'
import Nav from './Components/Nav';
import { Route,Routes,Link , useLocation} from 'react-router-dom';
import './app.css'
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
// animation
import {AnimatePresence} from 'framer-motion'
function App() {
  const location = useLocation()

  return (
    <div className="App">
   <Nav/>
   <AnimatePresence mode='wait'>
   <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<AboutPage/>}/>
        <Route path='/work' element={<WorkPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
    </AnimatePresence>
    </div>
  );
}

export default App;
