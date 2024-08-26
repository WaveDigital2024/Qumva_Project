
import PropTypes from 'prop-types';

import "../CustomCss/Login.css"
import Navber from '../Shared/Navber/Navber';
import Footer from '../Shared/Footer/Footer';

const ErorrPage = () => {
    return (
        <div className='loginbackgrnd'>
            <Navber></Navber>
            <div className='flex flex-col gap-3 justify-center items-center text-center text-white  min-h-screen'>
                <h1 className='text-6xl md:text-8xl px-3 font-poppins font-extrabold'>404</h1>
                <p className='text-4xl font-poppins font-bold px-3 uppercase'>page not found</p>
            </div>
            <Footer></Footer>

        </div>
    );
};

ErorrPage.propTypes = {

};

export default ErorrPage;