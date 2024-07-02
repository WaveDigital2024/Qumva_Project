
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const RecentPost = ({img , title , description})=> {
    return (
    <div className="card card-compact w-auto h-96 text-white  shadow-xl  mb-3 border-2  bg-gradient-to-r from-slate-900/50   to-sky-950/70 border-sky-300">
        <figure>
        <img className='h-48' src={img} alt="cover image" />
    </figure>
    <div className="card-body text-center items-center">
        <h2 className="card-title text-center">{title}</h2>
        <div>
            <h1 className='text-sm text-center px-2 font-light'> {description}</h1>
        </div>
        <div className='flex gap-3 px-2'>
            
            {/* {
                singleuserInfo[0]?.userRole === 'admin' && <div className="card-actions justify-end">
                <button disabled={true} onClick={handleGameDelete} className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'>Delete</button>
            </div>
            } */}
            
        </div>
    </div>
    <ToastContainer />
</div>
    );
};

RecentPost.propTypes = {
    img : PropTypes.string,
    title : PropTypes.string,
    description : PropTypes.string
};

export default RecentPost;