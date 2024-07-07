
// import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Title from "../Shared/Title/Title";
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const AddPosts = () => {
    const axiosSecure = useAxiosSecure()
    const handleAddPosts = async(e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value;
        const description = form.description.value;
        const img = form.img.value;
        const post = {img , title, description  }

        try {
            const response = await axiosSecure.post('/addposts', post);
            if (response.data.insertedId) {
                toast.success('Post added successfully!');
                form.reset();
            } else {
                toast.error('Failed to add post.');
            }
        } catch (error) {
            toast.error('An error occurred while adding the post.');
            console.error('Error adding post:', error);
        }

    }
    return (
        <div>
        <Title title={'Add New Product'}></Title>
        <div>
            <div className="flex  justify-center w-full h-auto font-Hind px-3">
                <div className=" max-w-4xl mx-auto rounded-2xl flex h-auto py-8 px-3" >
                    {/* login form */}
                    <div className="flex flex-row gap-4  py-1 px-28  border-x-4 rounded-3xl border-sky-300">
                        <form className='flex flex-col' onSubmit={handleAddPosts}>
                            <h1 className=" text-3xl md:text-2xl lg:text-3xl font-bold mt-4 mb-2 text-sky-300">Write Post Details </h1>
                            <input className="py-1 px-3  my-2 border-2 border-sky-200 hover:border-pink-600 rounded-lg" type="title" name="title" placeholder=" post title" />
                            <input className="py-1 px-3  my-2 border-2 border-sky-200 hover:border-pink-600 rounded-lg" type="text" name="img" placeholder="post img url" />
                            <input className="py-3 px-3  my-2 border-2 border-sky-200 hover:border-pink-600 rounded-lg" type="text" name="description" placeholder="post description" />
                            <input  className='btn bg-white text-black font-bold hover:text-pink-600 border-black hover:border-pink-600' type="submit" value="ADD POST" />

                        </form>

                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    </div>
    );
};

AddPosts.propTypes = {
    
};

export default AddPosts;