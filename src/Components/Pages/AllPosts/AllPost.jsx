
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUserInfo from '../../../Hooks/useUserInfo';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAllPosts from '../../../Hooks/useAllPosts';


const AllPost = ({post}) => {
    const {_id , img , title , description} = post
    const [userinfo] = useUserInfo()
    const axiosSecure = useAxiosSecure()
    const [,refetch] = useAllPosts()

     // admin delete
     const handlePostDelete = () => {
        console.log('admin delete');
        axiosSecure.delete(`/deletepost/${_id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast('done');
                    refetch();
                } else {
                    toast('No items deleted');
                }
            })
            .catch(error => {
                toast('Error:', error);
            });
    }
    return (
        <div className="card card-compact w-auto h-96 text-white  shadow-xl  mb-3 border-2  bg-gradient-to-r from-slate-900/50   to-sky-950/70 border-sky-300">
        <figure>
        <img className='h-48' alt="Qumva Coins" src={img}/>
    </figure>
    <div className="card-body text-center items-center">
        <h2 className="card-title text-center">{title}</h2>
        <div>
            <h1 className='text-sm text-center px-2 font-light'> {description}</h1>
        </div>
        <div className='flex gap-3 px-2'>
            
            {
                userinfo[0]?.userRole === 'admin' && <div className="card-actions justify-end">
                <button disabled={true} onClick={handlePostDelete} className="px-5 py-3 bg-gradient-to-l from-[#321c4e] via-[#1a0161] to-[#170247] rounded-xl font-extrabold uppercase mt-4">Delete</button>
            </div>
            }
            
        </div>
    </div>
    <ToastContainer />
</div>
    );
};

AllPost.propTypes = {
    post : PropTypes.object
    
};

export default AllPost;