

const RecipeCard = ({card}) => {
    return (
        <div>
            <div className="border-2 border-gray-200 rounded-lg p-3">
                <img className="h-[200px] w-[100%] rounded-lg" src={card.image} alt="" />
                <h2 className="text-xl text-black font-bold pt-3">{card.name}</h2>
                <p className="pt-3 pb-4">{card.short_description}</p>
                <div>
                    <h3 className="text-xl text-black font-medium">Ingredients: 6</h3>
                    <ol className="list-disc text-gray-500 ml-8">
                        <li>550 g chicken</li>
                        <li>120 ml soy sauce</li>
                        <li>200 g basil leaf</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;