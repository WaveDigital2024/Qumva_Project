
// import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navber from '../../Shared/Navber/Navber';
import { Helmet } from 'react-helmet';
import { FcGoogle } from 'react-icons/fc';
import Footer from '../../Shared/Footer/Footer';
import "../../CustomCss/Login.css"
import { AuthContext } from '../../../Providers/Authproviders';
import { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Login = () => {
    const {loginUser , GoogleLogin} =useContext(AuthContext)
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const handlelogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(password, email);
        loginUser(email , password)
        .then(result => console.log(result))
        .catch(error => console.log(error))

    }

    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
               
                const userinfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                };
                axiosSecure.post('/google-login', userinfo)
                    .then(res => {
                        console.log(res.data);
                        toast("Login Success");
                        navigate(location?.state ? location.state : '/');
                    })
                    .catch(error => {
                        toast(error.message);
                    });
            })
            .catch(error => {
                toast(error.message);
            });
    };
    return (
        <div className='loginbackgrnd min-h-screen'>
            <Helmet>
                <title>Qumva | Login</title>
            </Helmet>
            <Navber></Navber>
            <h1 className='font-extrabold text-2xl md:text-3xl lg:text-4xl font-poppins uppercase text-white pt-32 lg:pt-36 text-center tracking-widest'>Welcome back to Qumva Network!</h1>
            <p className='text-sm md:text-lg text-center font-poppins text-white w-full px-4 md:w-2/4 mx-auto mt-3 '>Dive back into a world of premium features and explore the endless possibilities that await. Reconnect and continue your journey today.</p>
            <div className=" max-w-3xl mx-auto h-auto   font-Hind px-3 ">
                <div className="flex justify-center mb-7  h-auto py-8 px-3 mt-11" >
                    {/* login form */}
                    <div className="flex flex-col  py-1 w-3/4  h-auto">
                        <form className='flex flex-col' onSubmit={handlelogin}>
                            <h1 className='font-semibold font-poppins text-white text-lg'>Email</h1>
                            <input className="py-2 px-3  my-2 border-2 border-black hover:border-purple-500 rounded-lg" type="email" name="email" placeholder="email" />
                            <h1 className='font-semibold font-poppins text-white text-lg'>Password</h1>
                            <input className="py-2 px-3  my-2 border-2 border-black hover:border-purple-500 rounded-lg" type="password" name="password" placeholder="password" />
                            <input className='mt-4 text-white font-semibold font-poppins uppercase flex items-center justify-center gap-2 border-2 py-3 px-4 border-purple-700 rounded-tr-xl rounded-bl-xl bg-gradient-to-t from-[#30185c] to-transparent hover:bg-purple-900' type="submit" value="Login" />

                        </form>
                        <div className="text-center ">
                            <p className="text-white pb-1">or login using google</p>
                            <button onClick={HandleGoogleLogin} className='mt-4 text-white font-semibold font-poppins uppercase flex items-center justify-center gap-2 border-2 py-3 px-4 border-purple-700 rounded-tr-xl rounded-bl-xl bg-gradient-to-t from-[#30185c] to-transparent hover:bg-purple-900 w-full'><FcGoogle></FcGoogle> Google</button>
                            <p className='pt-2 text-white'>Do not have a account? <Link to="/register"> <button className='text-purple-400 underline'>Sign up</button></Link></p>

                        </div>
                    </div>

                </div>
                <ToastContainer />
            </div>
            <Footer></Footer>
        </div>
    );
};

Login.propTypes = {

};

export default Login;