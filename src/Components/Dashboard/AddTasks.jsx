import { toast, ToastContainer } from "react-toastify";
import Title from "../Shared/Title/Title";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AddTasks = () => {
    const [title, setTitle] = useState('');
    const [twitterLink, setTwitterLink] = useState('');
    const axiosSecure = useAxiosSecure()
    const handleAddTask = async (event) => {
        event.preventDefault();

        const newTask = {
            title,
            points: 5, // assuming points is fixed at 5 as per your example
            twitter_link: twitterLink,
            done: false,
        };

        try {
            const response = await axiosSecure.post('/tasks', newTask);

            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }

            toast.success('Task added successfully!');
            setTitle('');
            setTwitterLink('');
        } catch (error) {
            toast.error('Failed to add task');
            console.error('Error adding task:', error);
        }
    };
    return (
        <div>
        <Title title={'Add New Task'} />
        <div className="flex justify-center w-full h-auto font-Hind px-3">
            <div className="max-w-4xl mx-auto rounded-2xl flex h-auto py-8 px-3">
                {/* form */}
                <div className="flex flex-row gap-4 py-1 px-28 border-x-4 rounded-3xl border-sky-300">
                    <form className='flex flex-col' onSubmit={handleAddTask}>
                        <h1 className="text-3xl md:text-2xl lg:text-3xl font-bold mt-4 mb-2 text-sky-300">Write Task Details</h1>
                        <input
                            className="py-1 px-3 my-2 border-2 border-sky-200 hover:border-pink-600 rounded-lg"
                            type="text"
                            name="title"
                            placeholder="Post title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <input
                            className="py-1 px-3 my-2 border-2 border-sky-200 hover:border-pink-600 rounded-lg"
                            type="url"
                            name="twitter_link"
                            placeholder="Twitter link"
                            value={twitterLink}
                            onChange={(e) => setTwitterLink(e.target.value)}
                            required
                        />
                        <input
                            className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600'
                            type="submit"
                            value="ADD TASK"
                        />
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    </div>
    );
};

export default AddTasks;