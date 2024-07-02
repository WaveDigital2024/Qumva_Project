
// import PropTypes from 'prop-types';
import { useState } from 'react';
import useUserInfo from '../../Hooks/useUserInfo';
import { Helmet } from 'react-helmet';
import Navber from '../Shared/Navber/Navber';
import "../CustomCss/Login.css"
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { ToastContainer, toast } from 'react-toastify';
const PointTransfer = () => {
    const [recipientEmail, setRecipientEmail] = useState('');
    const [transferPoints, setTransferPoints] = useState(0);
    const [message, setMessage] = useState('');
    const [userinfo] = useUserInfo()
    const axiosSecure = useAxiosSecure()


    const handleTransfer = async (e) => {
        e.preventDefault();


        try {
            const checkRes = await axiosSecure.get(`/checkpoints/${userinfo[0]?.email}`);
            const userPoints = checkRes.data.QumvaPoints;

            if (userPoints <= 10 || transferPoints < 20 || userPoints < transferPoints) {
                setMessage('Insufficient points or invalid transfer amount.');
                return;
            }

            const transferRes = await axiosSecure.patch('/transferpoints', {
                fromEmail: userinfo[0]?.email,
                toEmail: recipientEmail,
                QumvaPoints : transferPoints
            });

            setMessage(transferRes.data.message);
            toast(transferRes.data.message)
        } catch (error) {
            console.error('Error transferring points:', error);
            setMessage('Error transferring points.');
        }
    };
    return (
        <div className='loginbackgrnd min-h-screen'>
            <Helmet>
                <title>Qumva | Transections</title>
            </Helmet>
            <Navber />
            {/* transfer system */}
            <div className="pt-32">
                {/* card */}
                <div className="mx-auto mb-4 py-4 max-w-[350px] space-y-8 rounded-2xl px-6 border-2 bg-gradient-to-r from-slate-900/50 to-sky-950/70 border-purple-900 text-white font-poppins shadow-md md:max-w-[350px]">
                    <h2 className='font-poppins font-bold text-2xl md:text-3xl text-center py-3'>Transfer Coins</h2>
                    <form onSubmit={handleTransfer} className='flex items-center flex-col gap-2'>
                        <div className='text-center'>
                            <label className='font-semibold font-poppins text-white text-lg'>Recipient Email</label>
                            <input
                                className="py-2 px-3  my-2 border-2 border-black hover:border-purple-500 rounded-lg text-black"
                                type="email"
                                value={recipientEmail}
                                onChange={(e) => setRecipientEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='text-center'>
                            <label className='font-semibold font-poppins text-white text-lg'>Points to Transfer</label>
                            <input
                                type="number"
                                value={transferPoints}
                                className="py-2 px-3  my-2 border-2 border-black hover:border-purple-500 rounded-lg text-black"
                                onChange={(e) => setTransferPoints(Number(e.target.value))}
                                required
                                min="20"
                            />
                        </div>
                        <button  className='mt-4 full text-white font-semibold font-poppins uppercase flex items-center justify-center gap-2 border-2 py-3 px-4 border-purple-700 rounded-tr-xl rounded-bl-xl bg-gradient-to-t from-[#30185c] to-transparent hover:bg-purple-900' type="submit">Transfer</button>
                    </form>
                    {message && <p className='text-sm font-poppins uppercase text-white py-3 px-2 text-center'>{message}</p>}
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

PointTransfer.propTypes = {

};

export default PointTransfer;