import banner_img from '../../assets/images/banner.png'

const Main = () => {
    return (
        <main>
            <div className="">
                <div class="card w-[100%]  relative my-6">
                    <figure><img src={banner_img} alt="" /></figure>
                    <div class="card-body absolute lg:top-[30%] md:top-[10%] -top-6 lg:space-y-8  space-y-1">
                        <h2 class="card-title  lg:text-5xl md:text-5xl text-xl font-extrabold text-white lg:pl-60 pl-5 lg:pr-60 pr-5 lg:items-center text-center ">Discover an exceptional cooking class tailored for you!</h2>
                        <p class ="text-center  text-white pl-36 pr-36">
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                        </p>
                        <div class="card-actions justify-center">
                        <button class="btn bg-[#0be58a] text-lg font-medium rounded-full">Explore Now</button>
                        <button class ="btn   opacity-40 rounded-full border-2 border-black">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div> 
        </main>
    );
};

export default Main;