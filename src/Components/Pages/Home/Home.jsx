import Navber from "../../Shared/Navber/Navber";

import '../../CustomCss/Home.css'
import Banner from "./Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import RecentPosts from "./RecentPosts/RecentPosts";
import  "../../CustomCss/custom-scrollbar.css"
import Questions from "./FAQ/Questions";
const Home = () => {
    return (
        <div className="backgrnd min-h-screen overflow-hidden">
            <Navber></Navber>
            <Banner></Banner>
            <RecentPosts></RecentPosts>
            <Questions></Questions>
            <Footer></Footer>
        </div>
    );
};
export default Home;