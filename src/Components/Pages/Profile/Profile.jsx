import { Helmet } from "react-helmet";
import Navber from "../../Shared/Navber/Navber";
import Footer from "../../Shared/Footer/Footer";
import { AuthContext } from "../../../Providers/Authproviders";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import useUserInfo from "../../../Hooks/useUserInfo";
// import { useDisconnect } from "wagmi";
// import { disconnect } from "wagmi/actions";

const Profile = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [userinfo] = useUserInfo()


    const handlelogOut = () => {
        // disconnect()
        logout()
            .then(() => {
                toast('Logout Successfully');
                navigate('/');
            })
            .catch(error => {
                console.error("Logout error:", error);
                // Handle logout error
            });
    };

    // copy refer id
    const [copySuccess, setCopySuccess] = useState(false);

    const handleCopyClick = () => {
        if (userinfo && userinfo[0]?._id) {
            navigator.clipboard.writeText(userinfo[0]._id).then(() => {
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000); // Hide success message after 2 seconds
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
    };

    return (
        <div className='loginbackgrnd '>
            <Helmet>
                <title>Qumva | Profile</title>
            </Helmet>
            <Navber />
            <div className="pt-32 min-h-screen">
                <div className="mx-auto mb-4 py-4 max-w-[350px] space-y-8 rounded-2xl px-6 border-2 bg-gradient-to-r from-slate-900/50 to-sky-950/70 border-purple-900 text-white font-poppins shadow-md md:max-w-[350px]">
                    {/* profile image & bg  */}
                    <div className="text-center text-xl md:text-2xl font-extrabold">
                        <h1>Complete Tasks & Earn Coins</h1>
                    </div>
                    <hr />
                    {/* profile name & role */}
                    <div className="space-y-1 pt-3 text-center">
                        {userinfo ? (
                            <>
                                <h1 className="text-xl md:text-2xl">{userinfo[0]?.name}</h1>
                                <p className="text-sm text-gray-400">{userinfo[0]?.email}</p>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                    {/* post , followers following  */}
                    <div className="flex flex-wrap items-center justify-between px-4">
                        <div className="text-center">
                            {userinfo ? (
                                <>
                                    <h5 className="text-xs font-medium">{userinfo[0]?.QumvaPoints}</h5>
                                    <p className="text-sm text-gray-400">Coins</p>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="text-center">
                            {userinfo ? (
                                <>
                                    <h5 className="text-xs font-medium">{userinfo[0]?.userRole}</h5>
                                    <p className="text-sm text-gray-400">User Type</p>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="text-center">
                            {userinfo ? (
                                <>
                                    <h5 className="text-xs font-medium">{userinfo[0]?.userType}</h5>
                                    <p className="text-sm text-gray-400">User</p>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    {/* refer system  */}
                    <div className="text-center px-2">
                        {userinfo ? (
                            <>
                                <h5 className="text-xs font-medium mb-2 px-2">Refer Id : {userinfo[0]?._id}</h5>
                                <button
                                    onClick={handleCopyClick}
                                    className="text-xs font-medium bg-purple-700 text-white py-1 px-2 ml-2 rounded-md hover:bg-purple-800 duration-200"
                                >
                                    Copy
                                </button>
                                {copySuccess && <span className="text-green-500 text-xs ml-2">Copied!</span>}
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="flex flex-col-reverse justify-center items-center">
                        {/* <PointTransfer userEmail={userinfo[0]?.email} /> */}
                        <button onClick={handlelogOut} className='mt-4 full text-white font-semibold font-poppins uppercase flex items-center justify-center gap-2 border-2 py-3 px-4 border-purple-700 rounded-tr-xl rounded-bl-xl bg-gradient-to-t from-[#30185c] to-transparent hover:bg-purple-900'>Logout</button>
                        <Link to="/Transection"><button className='mt-4 w-full text-white font-semibold font-poppins uppercase flex items-center justify-center gap-2 border-2 py-3 px-4 border-purple-700 rounded-tr-xl rounded-bl-xl bg-gradient-to-t from-[#30185c] to-transparent hover:bg-purple-900'>Transfer Points</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Profile;
