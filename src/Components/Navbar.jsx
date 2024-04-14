import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    
  console.log(user)
    const handleLogOut = () => {
      logOut()
      .then((result)=> {
        console.log(result)
        toast.success('Sign Out Successful')
      })
      .catch(error=> {
        console.log(error.message)
        toast.error('Something went wrong')
      })
    }




    const navLink = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>

        {user && (
          <>
            <li>
              <NavLink to="/update_profile">Update Profile</NavLink>
            </li>
           <li>
              <NavLink to="/contact">Contact</NavLink>

           </li>
          </>
        )}
      </>
    );
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Dream Estate</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div
                tabIndex={0}
                role="button"
                data-tip={user.displayName ? user.displayName : ""}
                className="btn tooltip btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/c2n4P7t/user-128.png"
                    }
                  />
                </div>
              </div>
              <a onClick={handleLogOut} className="btn ">
                Sign Out
              </a>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    );
};

export default Navbar;