

import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { useEffect } from 'react'
import RecipeCard from './components/RecipeCard/RecipeCard'





function App() {

  const[cards, setCards] = useState([])

  useEffect(() =>{
    fetch("blogs.json")
    .then((res) => res.json())
    .then((data) =>{
      setCards(data);
    });
  }, []);

  

  return (
    <>
     <div className='w-[90%] mx-auto'>
        <Header></Header>
        <Main></Main>
     </div>
     <div className='main-container w-[90%] mx-auto gap-8 grid lg:grid-cols-2 grid-cols-1 pb-12'>
        <div className='recipe-container gap-8 grid lg:grid-cols-2 grid-cols-1'>
            {cards.map((pd) => (
              <RecipeCard key={pd.id} card ={pd}></RecipeCard>
            ))}
        </div>
        <div className='border-2 border-gray-300 rounded-lg p-4'>
           <h2 className='text-center text-2xl font-semibold border-b-2'>Want to cook: <span>0</span></h2>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Times</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr className="bg-base-200">
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td className='bg-green-400 rounded-full'>Preparing</td>
                  </tr>
                
                </tbody>
              </table>
            </div>
           <h2 className='text-center text-2xl font-semibold border-b-2'>Currently cooking: <span>0</span></h2>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Times</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr className="bg-base-200">
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Total Time =</td>
                    <td>Total Calories =</td>
                  </tr>
                
                </tbody>
              </table>
            </div>
        </div>
     </div>
    
    
    </>
  )
}

export default App;
