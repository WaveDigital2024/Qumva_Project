
// import PropTypes from 'prop-types';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import coin from "../../../../assets/images/coin.png"
import { motion } from "framer-motion";
import { AuthContext } from "../../../../Providers/Authproviders";
import { useContext } from "react";
const Banner = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="hero z-10 min-h-screen bg-transparent overflow-hidden">
            <div className="hero-content flex-col lg:flex-row">
                <motion.img
                    src={coin}
                    className="max-w-sm rounded-lg "
                    animate={{
                        y: [5, -40, 20],  // Keyframes for bounce effect
                    }}
                    transition={{
                        duration: 2,     // Duration of one complete cycle
                        repeat: Infinity, // Loop infinitely
                        ease: "easeInOut" // Easing function for smoother animation
                    }} />
                <div className="w-full md:w-2/3  md:px-6 px-3 ">
                    <h1 className="text-2xl text-white font-jaro uppercase py-2 leading-relaxed"><span className="font-bold">Qumva Network</span> <span className="font-medium"> aims to create a decentralized social media platform powered by Web3.This innovative Qumva Network seeks to revolutionize the way people interact and engage online by providing a secure, transparent, and user-centric social networking experience.</span></h1>
                   {
                    !user &  <button className="text-white font-semibold font-poppins uppercase flex items-center justify-center gap-2 border-2 py-3 px-4 border-purple-700 rounded-tr-xl rounded-bl-xl bg-gradient-to-t from-[#30185c] to-transparent hover:bg-purple-900">
                    <span>Signup </span>
                    <span className="text-white"><IoArrowForwardCircleOutline />
                    </span></button>
                   }
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {

};

export default Banner;