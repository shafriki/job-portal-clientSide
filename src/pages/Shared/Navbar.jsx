import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthCntext from '../../Provider/AuthContext';

const Navbar = () => {
    const {user, signOutUser} = useContext(AuthCntext);

    const links = <>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/myApplications'>My Applications</NavLink>
        <NavLink to='/addJob'>Add Job</NavLink>
    </>

    const handleSignOut = () => {
        signOutUser()
        .then(() =>{
            console.log('successful sign out')
        })
        .catch(error => {
            console.losg(error)
        })
    }
    return (
        <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu gap-10 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-10 menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user? <><Link onClick={handleSignOut} className='btn'>Log Out</Link></>: <>
                    <Link to='/login' className='btn mr-1'>Login</Link>
                    <Link to='/register' className='btn'>Register</Link></>
                }
            </div>
            </div>
    );
};

export default Navbar;