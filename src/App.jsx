import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { useEffect } from 'react'
import RecipeCard from './components/RecipeCard/RecipeCard'






function App() {

  const[cards, setCards] = useState([])
  const[recipe, setRecipe] = useState([])

  useEffect(() =>{
    fetch("blogs.json")
    .then((res) => res.json())
    .then((data) =>{
      setCards(data);
    });
  }, []);

  const handleRecipeCard =(c) =>{

      const isExist = recipe.find(item => item.id == c.id);
      if(!isExist){
        setRecipe([...recipe, c]);
      }
      else{
        toast('Recipe Cart Already Exists')
      }
      
      

      
  }

  console.log(recipe);

  return (
    <>
     <div className='w-[90%] mx-auto'>
        <Header></Header>
        <Main></Main>
        <ToastContainer />
     </div>
     <div className='main-container w-[90%] mx-auto gap-8 grid lg:grid-cols-2 grid-cols-1 pb-12'>
        <div className='recipe-container gap-8 grid lg:grid-cols-2 grid-cols-1'>
            {cards.map((pd) => (
              <RecipeCard handleRecipe={handleRecipeCard} key={pd.id} card ={pd}></RecipeCard>
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
                  {recipe.map((item, index) =>(
                    <tr className="bg-base-200">
                    <th>{index+1}</th>
                    <td>{item.name}</td>
                    <td>{item.preparing_time}</td>
                    <td>{item.calories}</td>
                    <td className='bg-green-400 rounded-full'>Preparing</td>
                  </tr>
                  ))}
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
