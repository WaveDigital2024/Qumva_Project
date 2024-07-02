import Footer from "../../Shared/Footer/Footer";
import Navber from "../../Shared/Navber/Navber";
import Title from "../../Shared/Title/Title";
import AllPost from "./AllPost";
import logo from "../../../assets/images/coin.png"
import "../../CustomCss/Login.css"
const AllPosts = () => {
    return (
        <div className="loginbackgrnd">
            <Navber></Navber>

            {/* title */}
            <Title title={'All Posts'}></Title> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 px-4 pt-6">
                {/* 1111111111111111111 */}
                <AllPost img={logo} title={'What is Qumva?'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}></AllPost>
                <AllPost img={logo} title={'What is Qumva?'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}></AllPost>
                <AllPost img={logo} title={'What is Qumva?'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}></AllPost>
                <AllPost img={logo} title={'What is Qumva?'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}></AllPost>
                <AllPost img={logo} title={'What is Qumva?'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}></AllPost>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllPosts;