
// import PropTypes from 'prop-types';

import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/images/coin.png"

const Layout = () => {
    return (
        <div className="backgrnd">
            <div className="">
                <div className=" md:hidden">
                    <div className="navbar bg-gradient-to-r from-pink-700/40  via-purple-950 to-sky-950/70">
                        <div className="flex-none">
                            {/* <button className="btn btn-square btn-ghost text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button> */}
                            <div className="drawer">
                                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    {/* Page content here */}
                                    <label htmlFor="my-drawer" className="btn btn-ghost text-white drawer-button"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>

                                </div>
                                <div className="drawer-side z-50">
                                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <ul className="menu p-4 w-1/2 min-h-full bg-gradient-to-r from-pink-800/40  via-purple-950 to-sky-950/80 text-base-content">
                                        {/* Sidebar content here */}
                                        <Link > <button className="btn w-full   my-3 bg-gradient-to-r from-sky-700/40  via-purple-500/40 to-pink-400/80 font-bold hover:border-sky-300">Dashboard</button></Link>
                                        <Link to="/admindashboard/addpost"><button className="btn w-full   my-3 bg-gradient-to-r from-sky-700/40  via-purple-500/40 to-pink-400/80 font-bold hover:border-sky-300">Add Posts</button></Link>
                                        <Link to="/dashboard/addtask"><button className="btn w-full   my-3 bg-gradient-to-r from-sky-700/40  via-purple-500/40 to-pink-400/80 font-bold hover:border-sky-300">Add Tasks</button></Link>
                                        <Link to="/"><button className="btn w-full   my-3 bg-gradient-to-r from-sky-700/40  via-purple-500/40 to-pink-400/80 font-bold hover:border-sky-300">Home</button></Link>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <a className="text-xl text-white font-bold font-Rubik">Qumva Network</a>
                        </div>
                    </div>
                </div>
                <div className="hidden h-screen fixed px-3 border-r-2 border-sky-300 md:flex flex-col pt-5 justify-start bg-gradient-to-r from-pink-800/40  via-purple-950 to-sky-950/80">
                    <img className="w-full  h-40" src={logo} alt="Qumva" />
                    <Link > <button className="btn w-full   my-3 bg-gradient-to-r from-sky-700/40  via-purple-500/40 to-pink-400/80 font-bold hover:border-sky-300">Dashboard</button></Link>
                    <Link to="/admindashboard/addpost"><button className="btn w-full   my-3 bg-gradient-to-r from-sky-700/40  via-purple-500/40 to-pink-400/80 font-bold hover:border-sky-300">Add Posts</button></Link>
                    <Link to="/dashboard/addtask"><button className="btn w-full   my-3 bg-gradient-to-r from-sky-700/40  via-purple-500/40 to-pink-400/80 font-bold hover:border-sky-300">Add Tasks</button></Link>
                    <Link to="/"><button className="btn w-full   my-3 bg-gradient-to-r from-sky-700/40  via-purple-500/40 to-pink-400/80 font-bold hover:border-sky-300">Home</button></Link>
                </div>
                <div className="min-h-screen md:relative md:ml-52 px-3 z-40">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

Layout.propTypes = {

};

export default Layout;