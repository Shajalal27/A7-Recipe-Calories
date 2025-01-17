import search from '../../assets/images/search.png'
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap ="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost lg:text-3xl text-xl font-bold -ml-8">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
    </ul>
  </div> 
  <div className="navbar-end flex gap-3">
    <button className='flex gap-1 border-2 bg-slate-200 rounded-full   '>
        <img className='' src={search} alt="" />
        <input className='bg-transparent outline-none' type="text" placeholder='Search' />
    </button>
    <div className='lg:flex hidden bg-[#0be58a] rounded-full'><img src={profile} alt="" /></div>
  </div>
</div>
    );
};

export default Header;