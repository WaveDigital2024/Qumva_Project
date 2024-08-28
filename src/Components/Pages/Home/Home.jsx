import Navber from "../../Shared/Navber/Navber";

import '../../CustomCss/Home.css'
import Banner from "./Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import RecentPosts from "./RecentPosts/RecentPosts";
import  "../../CustomCss/custom-scrollbar.css"
import Questions from "./FAQ/Questions";
import BuiltOn from "./BuiltOn/BuiltOn";
import Market from "./TotalMarket/Market";
import useUserInfo from "../../../Hooks/useUserInfo";
import Swal from "sweetalert2";
import { useEffect } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Home = () => {
    const [userinfo] = useUserInfo();
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        if (userinfo[0]?.Refered === false) {
            setTimeout(() => {
                Swal.fire({
                    title: 'Enter Your Referral Code',
                    input: 'text',
                    inputPlaceholder: 'Referral Code',
                    showCancelButton: true,
                    confirmButtonText: 'Submit',
                    cancelButtonText: 'Cancel',
                }).then((result) => {
                    if (result.isConfirmed) {
                        const referralCode = result.value;
                        const email = userinfo[0]?.email || 'none'; 

                        const referinfo = {referralCode , email}
                        axiosSecure.patch('/refered', referinfo)
                        .then(res => {
                            console.log(res.data);
                        })
                        .catch(error => {
                            console.log(error.message);
                        });
                        console.log("Submitted Referral Code:", referralCode);
                        // You can call an API or update the state with the referral code
                    }
                });
            }, 5000); // Trigger after 5 seconds
        }
    }, [userinfo , axiosSecure]);
    return (
        <div className="backgrnd min-h-screen overflow-hidden">
            <Navber></Navber>
            <Banner></Banner>
            <RecentPosts></RecentPosts>
            <BuiltOn></BuiltOn>
            <Market></Market>
            <Questions></Questions>
            <Footer></Footer>
        </div>
    );
};
export default Home;