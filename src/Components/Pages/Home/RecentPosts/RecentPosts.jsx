import Title from "../../../Shared/Title/Title";
import RecentPost from "./RecentPost";
import logo from "../../../../assets/images/coin.png"
import { Link } from "react-router-dom";


const RecentPosts = () => {
    return (
        <div className="max-w-6xl mx-auto px-3 my-3">
            <Title title={'Recent Posts'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 px-4 mt-6">
                <RecentPost img={logo} title={'What is Qumva?'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}></RecentPost>
                <RecentPost img={logo} title={'How Qumva Works?'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}></RecentPost>
                <RecentPost img={logo} title={'What is the history Qumva?'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}></RecentPost>
            </div>
            {/* see more btn */}
            <div className="flex justify-center">
                <Link to={'/Post'}><button className="text-white font-semibold font-poppins uppercase flex items-center justify-center gap-2 border-2 py-3 px-4 border-purple-700 rounded-tr-xl rounded-bl-xl bg-gradient-to-t from-[#30185c] to-transparent hover:bg-purple-900 text-center mt-3 mb-5">See More</button></Link>
            </div>


        </div>
    );
};

export default RecentPosts;