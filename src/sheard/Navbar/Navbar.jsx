import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";




const Navbar = () => {

  const navLink = <>
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/about">About Us</NavLink></li>
  <li><NavLink to="/blog">Blog</NavLink></li>
  <li><NavLink to="/events">Events</NavLink></li>
  <li><NavLink to="/contact">Contact Us</NavLink></li>
  <li><NavLink to="/login">Login</NavLink></li>
  </>

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () =>{
       logOut()
       .then()
       .catch()
    }

    return (
        <div className="navbar w-11/12 mx-auto bg-base-100 mt-8">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl font-bold">Health & Wellness</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">
            {
              user ?
              <div className=" flex-row lg:flex justify-center items-center mr-4 gap-2">
                <p className=" text-lg font-semibold">{user?.displayName}</p>
               <img className=" w-12 h-12 rounded-full" src={user?.photoURL? user.photoURL : `https://i.ibb.co/D9wWRM6/olivia.jpg`} alt="" />
              </div>
          :
           <div>
           </div>
          }
          
      {
        user ?
        <button onClick={handleSignOut} className="btn bg-blue-200">Sign Out</button>
        :
        <Link to="/login">
            <button className="btn bg-blue-200">Login</button>
        </Link>
      }
  </div>
</div>
    );
};

export default Navbar;