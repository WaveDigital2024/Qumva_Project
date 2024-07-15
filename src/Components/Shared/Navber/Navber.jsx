
// import PropTypes from 'prop-types';

import { Link, NavLink } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Authproviders";
import useUserInfo from "../../../Hooks/useUserInfo";
import { useWeb3Modal } from "@web3modal/wagmi/react";
const Navber = () => {
    const { user, twitterLogin } = useContext(AuthContext)
    const [userinfo] = useUserInfo()
    const { open } = useWeb3Modal()
    const handleTwitterLogin = async () => {
        try {
            await twitterLogin();
            console.log('Twitter login successful');
        } catch (error) {
            console.error('Error logging in with Twitter', error);
        }
    };


    const navlinks = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-sm font-bold bg-gradient-to-t from-[#30185c] to-transparent text-purple-700 py-6 px-3 duration-200 border-b-4 border-[#432e6b] ' : 'text-sm hover:bg-gradient-to-t from-[#30185c] to-transparent text-[#f8f5f5] hover:text-purple-700 py-6 px-3 duration-200 hover:border-b-4  hover:border-[#352455]'}>Home</NavLink></li>

        <li><NavLink to="/earnpoints" className={({ isActive }) => isActive ? 'text-sm font-bold text-purple-700 hover:bg-gradient-to-t from-[#30185c] to-transparent  hover:text-purple-700 py-6 px-3 duration-200 hover:border-b-4  hover:border-[#352455] ' : 'text-sm hover:bg-gradient-to-t from-[#30185c] to-transparent text-[#f8f5f5] hover:text-purple-700 py-6 px-3 duration-200 hover:border-b-4  hover:border-[#352455]'}>Earn Points</NavLink></li>

        {
            user && <li><NavLink to="/Profile" className={({ isActive }) => isActive ? 'text-sm font-bold bg-gradient-to-t from-[#30185c] to-transparent text-purple-700 py-6 px-3 duration-200 hover:border-b-4 border-[#352455] ' : 'text-sm hover:bg-gradient-to-t from-[#30185c] to-transparent text-[#f8f5f5] hover:text-purple-700 py-6 px-3 duration-200 hover:border-b-4  hover:border-[#352455]'}>Profile</NavLink></li>
        }

        <li><NavLink to="/Post" className={({ isActive }) => isActive ? 'text-sm font-bold bg-gradient-to-t from-[#30185c] to-transparent text-purple-700 py-6 px-3 duration-200 hover:border-b-4 border-[#352455] ' : 'text-sm hover:bg-gradient-to-t from-[#30185c] to-transparent text-[#f8f5f5] hover:text-purple-700 py-6 px-3 duration-200 hover:border-b-4  hover:border-[#352455]'}>Posts</NavLink></li>

        {
            userinfo[0]?.userRole === 'admin' && <div>
                <li ><NavLink to="/admindashboard" className={({ isActive }) => isActive ? 'text-sm font-bold bg-gradient-to-t from-[#30185c] to-transparent text-purple-700 py-6 px-3 duration-200 hover:border-b-4 border-[#352455] ' : 'text-sm hover:bg-gradient-to-t from-[#30185c] to-transparent text-[#f8f5f5] hover:text-purple-700 py-6 px-3 duration-200 hover:border-b-4  hover:border-[#352455]'}>Dashboard</NavLink></li>
            </div>
        }

    </>
    return (
        <div className=''>
            <div className='fixed z-50 w-full bg-gradient-to-r from-[#090718d5]  via-[#18152c] to-[#090718]   border-b-2 border-sky-300 py-2'>
                <div className="navbar font-Hind px-1 md:px-3 max-w-7xl mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown mt-4">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-gradient-to-r from-[#090718d5]  via-[#18152c] to-[#090718]  rounded-box w-52 px-5">
                                {navlinks}
                            </ul>
                        </div>
                        {/* logo */}
                        <div className="font-Hind font-bold ">
                            {/* <img className='h-16 w-28' src={logo} alt="Qumva" /> */}
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-jaro font-bold text-white">Qumva</h1>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="flex h-full px-1 gap-3 font-bold font-poppins">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {/* btn */}
                        {user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="text-white font-semibold font-poppins uppercase flex items-center justify-center gap-2 border-2 py-3 px-4 border-purple-700 rounded-tr-xl rounded-bl-xl bg-gradient-to-t from-[#30185c] to-transparent hover:bg-purple-900">Connect</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-[#090718d5] rounded-box z-[1] w-52 p-2 mt-7 shadow text-white">
                                    <li onClick={() => open()} className="text-sm font-semibold py-2 px-1 uppercase"><a>Connect Wallet</a></li>
                                    <li onClick={handleTwitterLogin} className="text-sm font-semibold py-2 px-1 uppercase"><a>Connect Twitter</a></li>

                                </ul>
                            </div>
                            : <Link to={'/login'}><button className="text-white font-semibold font-poppins uppercase flex items-center justify-center gap-2 border-2 py-3 px-4 border-purple-700 rounded-tr-xl rounded-bl-xl bg-gradient-to-t from-[#30185c] to-transparent hover:bg-purple-900">
                                <span>Log In </span>
                                <span className="text-white"><IoArrowForwardCircleOutline />
                                </span></button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

Navber.propTypes = {

};

export default Navber;