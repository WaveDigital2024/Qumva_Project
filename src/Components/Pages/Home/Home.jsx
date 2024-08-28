import Navber from "../../Shared/Navber/Navber";

import '../../CustomCss/Home.css'
import Banner from "./Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import RecentPosts from "./RecentPosts/RecentPosts";
import  "../../CustomCss/custom-scrollbar.css"
import Questions from "./FAQ/Questions";
import BuiltOn from "./BuiltOn/BuiltOn";
import Market from "./TotalMarket/Market";
const Home = () => {
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