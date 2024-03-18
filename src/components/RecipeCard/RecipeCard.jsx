import watch from '../../assets/images/watch.png'
import fire from '../../assets/images/fire.png'

import PropTypes from 'prop-types';

const RecipeCard = ({card, handleRecipe}) => {
    console.log(handleRecipe);
    return (
        <div>
            <div className="border-2 border-gray-200 rounded-lg p-3">
                <img className="h-[200px] w-[100%] rounded-lg" src={card.image} alt="" />
                <h2 className="text-xl text-black font-bold pt-3">{card.name}</h2>
                <p className="pt-3 pb-4">{card.short_description}</p>
                <div>
                    <h3 className="text-xl text-black font-medium">Ingredients: 6</h3>
                    <ul className="list-disc text-gray-500 ml-8">
                        <li>{card.ingredients}</li>
                        
                        
                    </ul>
                </div>
                <div className='flex gap-6 pt-4'>
                    <div className='flex gap-4'>
                        <img src={watch} alt="" />
                        <p>{card.preparing_time}</p>
                    </div>
                    <div className='flex gap-4'>
                        <img src={fire} alt="" />
                        <p>{card.calories}</p>
                    </div>
                </div>
                <div className="text-lg font-semibold text-black pt-4">
                    <button onClick={() =>handleRecipe(card)} className="bg-green-400 px-4 py-1 rounded-3xl">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

RecipeCard.propTypes ={
    card: PropTypes.object.isRequired
}


export default RecipeCard;