
import PropTypes from 'prop-types';
import { IoMdArrowDropright } from 'react-icons/io';
import useTaskComplete from '../../../../Hooks/useTaskComplete';
import { AuthContext } from '../../../../Providers/Authproviders';
import { useContext } from 'react';
import useUserInfo from '../../../../Hooks/useUserInfo';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { ToastContainer, toast } from 'react-toastify';


const Task = ({ singletask, index }) => {
    const [, refetch] = useTaskComplete()
    const { user } = useContext(AuthContext);
    const [userinfo] = useUserInfo()
    const axiosSecure = useAxiosSecure()
    const { title, points, twitter_link, done, _id } = singletask
    const handlecompletask = async () => {
        axiosSecure.patch(`/completetask/${_id}`)
            .then(res => {
                if (res.data.acknowledged) {
                    refetch();
                    axiosSecure.patch(`/updateuserpoints`, { email: user.email, points })
                        .then(userRes => {
                            if (userRes.data.acknowledged) {
                                console.log('User points updated successfully');
                            } else {
                                console.error('Failed to update user points');
                            }
                        })
                        .catch(error => {
                            console.error('Error updating user points:', error);
                        });
                }
            })
            .catch(error => {
                console.error('Error updating task:', error);
            });

    };

    // admin delete
    const handleTaskDelete = () => {
        console.log('admin delete');
        axiosSecure.delete(`/deletetask/${_id}`)
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
        <div className="flex justify-between items-center px-4 w-11/12 mx-auto bg-gradient-to-l from-[#010103e1]  via-[#20002c] to-[#07000c] py-3 mt-4 rounded-xl ">
            {/* task details */}
            <div>
                <h1 className="text-xl md:text-2xl py-1 font-extrabold">Task {index + 1}</h1>
                <h1 className="text-sm  md:text-lg py-1 font-bold">{title}</h1>
            </div>
            {/* task complete btn & delete btn */}
            <div className='flex flex-col gap-2 lg:flex-row-reverse'>
                {!done ? (
                    <div className="flex gap-4 flex-row items-center">
                        <button className="px-5 py-3 bg-gradient-to-l from-[#321c4e] via-[#1a0161] to-[#170247] rounded-xl font-extrabold uppercase">
                            {points} Points
                        </button>
                        {/* arrow logo */}
                        <a onClick={handlecompletask} target="_blank" href={twitter_link}>
                            <div className="text-2xl md:text-4xl">
                                <IoMdArrowDropright />
                            </div>
                        </a>
                    </div>
                ) : (
                    <button className="px-5 py-3 bg-gradient-to-l from-[#321c4e] via-[#1a0161] to-[#170247] rounded-xl font-extrabold uppercase">
                        Completed
                    </button>
                )}
                {
                    userinfo[0]?.userRole === 'admin' && <div className="">
                        <button onClick={handleTaskDelete} className="px-5 py-3 bg-gradient-to-l from-[#321c4e] via-[#1a0161] to-[#170247] rounded-xl font-extrabold uppercase">Delete</button>
                    </div>
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

Task.propTypes = {
    singletask: PropTypes.object,
    index: PropTypes.number
};

export default Task;