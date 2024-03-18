import banner_img from '../../assets/images/banner.png'

const Main = () => {
    return (
        <main>
            <div className="">
                <div className="card w-[100%]   relative my-6">
                    <figure><img className='h-[70vh] w-[100%]' src={banner_img} alt="" /></figure>
                    <div className="card-body w-[100%] absolute lg:top-[10%] md:top-[8%] top-0 lg:space-y-8  space-y-1">
                        <h2 className="card-title  lg:text-5xl md:text-5xl text-xl font-extrabold text-white md:pl-10  pl-5 md:pr-10 
                         pr-5 lg:items-center text-center ">Discover an exceptional cooking class tailored for you!</h2>
                        <p className ="text-center  text-white md:pl-66  md:pr-36 ">
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                        </p>
                        <div className="card-actions justify-center">
                        <button className="btn bg-[#0be58a] text-lg font-medium rounded-full">Explore Now</button>
                        <button className ="btn   opacity-40 rounded-full border-2 border-black">Our Feedback</button>
                        </div>
                    </div>
                </div>
                <div className ="my-10">
                    <h2 className ="text-2xl text-black font-bold text-center">Our Recipes</h2>
                    <p className ="text-center lg:pl-60 lg:pr-60">A recipe is a set of instructions that describes how to prepare or make something, especially a dish of prepared food. A sub-recipe or subrecipe is a recipe</p>
                </div>
            </div> 
        </main>
    );
};

export default Main;