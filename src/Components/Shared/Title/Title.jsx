
import PropTypes from 'prop-types';

const Title = ({title})=> {
    return (
        <div className='flex justify-center items-center pt-4 mb-3 '>
            <div className='text-center border-2 py-2 border-purple-900 px-2 md:px-4 lg:px-6 rounded-xl bg-gradient-to-t from-[#30185c] to-transparent' >
                <h1 className=' font-poppins text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-widest'>{title}</h1>
            </div>
        </div>
    );
};

Title.propTypes = {
    title : PropTypes.string
};

export default Title;