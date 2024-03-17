import { useEffect, useState } from 'react'


import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Cards from './components/Cards/Cards';
import RecipeCounts from './components/RecipeCounts/RecipeCounts';


function App() {

  return (
    <>
     <Header></Header>
     <Main></Main>
     <div className='md:flex'>
        <Cards></Cards>
        <RecipeCounts></RecipeCounts>
     </div>
    
    
    </>
  )
}

export default App;
