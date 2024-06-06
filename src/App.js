import React from 'react';
import Profile from './components/Profile';
import Bio from './components/Bio';
import ButtonSet from './components/ButtonSet';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
     <Profile />
     <Bio />
     <ButtonSet />
     <Footer />
    </BrowserRouter>
  )
}

export default App