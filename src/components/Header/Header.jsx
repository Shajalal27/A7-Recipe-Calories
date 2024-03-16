import search from '../../assets/images/search.png'
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost lg:text-3xl text-xl font-bold">Recipe Calories</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
    </ul>
  </div> 
  <div class="navbar-end flex gap-3">
    <button className='flex gap-3 border-2 bg-slate-200 py-1 px-14 rounded-full'>
        <img className='-ml-12' src={search} alt="" />
        <p>Search</p>
    </button>
    <div className='lg:flex hidden bg-[#0be58a] rounded-full'><img src={profile} alt="" /></div>
  </div>
</div>
    );
};

export default Header;