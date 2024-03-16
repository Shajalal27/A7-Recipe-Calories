import banner_img from '../../assets/images/banner.png'

const Main = () => {
    return (
        <main>
            <div className="">
                <div class="card w-[100%] relative">
                    <figure><img src={banner_img} alt="" /></figure>
                    <div class="card-body absolute top-[30%] space-y-8">
                        <h2 class="card-title  text-5xl font-extrabold text-white pl-60 pr-60 items-center text-center ">Discover an exceptional cooking class tailored for you!</h2>
                        <p class ="text-center text-white pl-36 pr-36">
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