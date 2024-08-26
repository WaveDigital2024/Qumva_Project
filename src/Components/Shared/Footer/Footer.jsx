
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <footer className="grid grid-cols-1 gap-3 md:grid-cols-4 p-12 bg-[#090718]">
            <nav className="px-2 ">
                <h1 className="text-3xl lg:text-4xl font-jaro font-bold text-white py-3 px-2">Qumva</h1>
                <p className="w-full text-white font-poppins px-2">Pioneering the next generation of Gaming through United Creativity and Technological Advancement.</p>
            </nav>
            <nav className="px-2 md:px-1">
                <h1 className="text-xl  font-poppins  font-bold text-white px-2">Quick Links</h1>
                <div className="flex flex-col gap-2 px-2 py-2 text-white font-poppins">
                    <Link to={'/earnpoints'} className="hover:text-purple-700 duration-500">Earn Points</Link>
                    <Link to={'/Transection'} className="hover:text-purple-700 duration-500">Transfer Coins</Link>
                    <Link to={'/Profile'} className="hover:text-purple-700 duration-500">Profile</Link>
                    <Link to={'/'} className="hover:text-purple-700 duration-500">Home</Link>
                </div>
            </nav>
            <nav className="px-2 md:px-1">
                <h1 className="text-xl  font-poppins  font-bold text-white px-2">Social Links</h1>
                <div className="flex flex-col gap-2 px-2 py-2 text-white font-poppins">
                    <a href="https://t.me/QumvaCommunity" target="_blank" className="hover:text-purple-700 duration-500">Telegram Group</a>
                    <a href="https://t.me/QumvaNetwork" target="_blank" className="hover:text-purple-700 duration-500">Telegram Channel</a>
                    <a href="https://x.com/QumvaNetwork" target="_blank" className="hover:text-purple-700 duration-500">Twitter</a>  
                </div>
            </nav>
            <form>
                <h6 className="text-xl md:text-2xl font-poppins px-2 py-2 font-semibold text-white">Stay up to date on all things.</h6>
                <fieldset className="form-control w-auto">
                    <label className="label">
                        <span className="label-text text-white font-poppins">Enter your email address</span>
                    </label>
                    <div className="join border-2 border-white py-2 px-2">
                        <input type="text" placeholder="username@site.com" className="input input-md text-white w-full max-w-xs bg-transparent " />
                        <button className="btn hover:bg-purple-900 duration-500 hover:border-purple-900 hover:text-white font-poppins ">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

Footer.propTypes = {

};

export default Footer;