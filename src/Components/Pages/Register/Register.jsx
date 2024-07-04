
// import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../Shared/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navber from '../../Shared/Navber/Navber';
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/Authproviders';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Register = () => {
    const { createUser, UpdateProfile, GoogleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const password = form.get('password');
        const name = form.get('name');
        const userEmail = form.get('email');

        setEmail(userEmail);

        // Create user and send OTP
        createUser(userEmail, password)
            .then(result => {
                const userinfo = {
                    email: userEmail,
                    name: name,
                    userRole: 'user',
                    userType: 'notverified',
                    QumvaPoints: 0,
                };

                return axiosSecure.post('/register', userinfo);
            })
            .then(() => {
                UpdateProfile(name)
                .catch(error => {
                    toast(error.message)
                })
                toast('Register Success, OTP sent to your email');
                setIsOtpSent(true);
            })
            .catch(error => {
                toast(error.message);
            });
    };

    const handleVerifyOtp = () => {
        axiosSecure.post('/verify-otp', { email, otp })
            .then(response => {
                toast(response.data.message);
                navigate('/');
            })
            .catch(error => {
                toast(error.message);
            });
    };






    // ----------------------Google------------------//
    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                console.log(result);
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
                <title>Qumva | Register</title>
            </Helmet>
            <Navber></Navber>
            <h1 className='font-extrabold text-2xl md:text-3xl lg:text-4xl font-poppins uppercase text-white pt-32 lg:pt-36 text-center tracking-widest'>Create Your Account Today!</h1>
            <p className='text-sm md:text-lg text-center font-poppins text-white w-full px-4 md:w-2/4 mx-auto mt-3 '>Begin your Qumva Network experience now. Sign up to access exclusive features. Simple, fast, secure</p>
            <div className="max-w-3xl mx-auto h-auto font-Hind px-3">
                <div className="flex justify-center mb-7 h-auto py-8 px-3 mt-11">
                    {/* login form */}
                    <div className="flex flex-col py-1 w-3/4 h-auto">
                        {!isOtpSent ? (
                            <form className='flex flex-col' onSubmit={handleRegister}>
                                <h1 className='font-semibold font-poppins text-white text-lg'>Name</h1>
                                <input className="py-2 px-3 my-2 border-2 border-black hover:border-purple-500 rounded-lg" type="text" name="name" placeholder="User Name" />
                                <h1 className='font-semibold font-poppins text-white text-lg'>Email</h1>
                                <input className="py-2 px-3 my-2 border-2 border-black hover:border-purple-500 rounded-lg" type="email" name="email" placeholder="Email" />
                                <h1 className='font-semibold font-poppins text-white text-lg'>Password</h1>
                                <input className="py-2 px-3 my-2 border-2 border-black hover:border-purple-500 rounded-lg" type="password" name="password" placeholder="Password" />
                                <input className='mt-4 text-white font-semibold font-poppins uppercase flex items-center justify-center gap-2 border-2 py-3 px-4 border-purple-700 rounded-tr-xl rounded-bl-xl bg-gradient-to-t from-[#30185c] to-transparent hover:bg-purple-900' type="submit" value="Sign Up" />
                            </form>
                        ) : (
                            <div className="flex flex-col">
                                <h1 className='font-semibold font-poppins text-white text-lg'>Enter OTP</h1>
                                <input className="py-2 px-3 my-2 border-2 border-black hover:border-purple-500 rounded-lg" type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="OTP" />
                                <button className='mt-4 text-white font-semibold font-poppins uppercase flex items-center justify-center gap-2 border-2 py-3 px-4 border-purple-700 rounded-tr-xl rounded-bl-xl bg-gradient-to-t from-[#30185c] to-transparent hover:bg-purple-900' onClick={handleVerifyOtp}>Verify OTP</button>
                            </div>
                        )}
                        <div className="text-center">
                            <p className="text-white pb-1">or signup using google</p>
                            <button onClick={HandleGoogleLogin} className='mt-4 text-white font-semibold font-poppins uppercase flex items-center justify-center gap-2 border-2 py-3 px-4 border-purple-700 rounded-tr-xl rounded-bl-xl bg-gradient-to-t from-[#30185c] to-transparent hover:bg-purple-900 w-full'><FcGoogle></FcGoogle> Google</button>
                            <p className='pt-2 text-white'>Already have an account? <Link to="/login"><button className='text-purple-400 underline'>Login</button></Link></p>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
            <Footer></Footer>
        </div>
    );
};

Register.propTypes = {

};

export default Register;