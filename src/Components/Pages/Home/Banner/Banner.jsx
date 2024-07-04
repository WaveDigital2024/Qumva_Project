
// import PropTypes from 'prop-types';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import coin from "../../../../assets/images/coin.png"
import { motion } from "framer-motion";
const Banner = () => {
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
                }}/>
                <div className="w-full md:w-2/3  md:px-6 px-3 ">
                    <h1 className="text-5xl text-white font-jaro uppercase py-2 leading-relaxed"><span className="font-bold">QUMVA :</span> <span className="font-medium">The future of gaming, at your fingertips.</span></h1>
                    <button className="text-white font-semibold font-poppins uppercase flex items-center justify-center gap-2 border-2 py-3 px-4 border-purple-700 rounded-tr-xl rounded-bl-xl bg-gradient-to-t from-[#30185c] to-transparent hover:bg-purple-900">
                            <span>Signup </span>
                            <span className="text-white"><IoArrowForwardCircleOutline />
                        </span></button>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {

};

export default Banner;