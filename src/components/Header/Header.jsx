
import { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Header = () => {
    const location = useLocation()
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("YOur are logout now");
            })
            .catch((error) => {
                console.error("Logout failed:", error);
            });
    }
    const links =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/Statistics'}>Statistics</NavLink></li>
            <li><NavLink to={'/dashbaord'}>Dashbaord</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
        </>


    const navbarColor = location.pathname === '/' ? 'bg-[#9538E2] text-white' : 'bg-white text-gray-800';
    return (

        <div className={`${navbarColor}  max-w-screen-xl mt-4 rounded-t-lg mx-auto`}>
            <div className="navbar max-w-screen-xl mx-auto py-4">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="font-bold text-xl">Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end flex gap-1">

                    {
                        user ? <button onClick={handleLogOut} className="btn rounded-full text-xl border">Logut</button> : <Link to='login' className="btn rounded-full text-xl border">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;