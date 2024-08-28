import Footer from "../../Shared/Footer/Footer";
import Navber from "../../Shared/Navber/Navber";
import Title from "../../Shared/Title/Title";
import AllPost from "./AllPost";
import "../../CustomCss/Login.css"
import useAllPosts from "../../../Hooks/useAllPosts";
const AllPosts = () => {
    const [allposts] = useAllPosts()
  
    return (
        <div className="loginbackgrnd min-h-screen">
            <Navber></Navber>

            {/* title */}
            <Title title={'All Posts'}></Title> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 px-4 pt-6 mb-4 min-h-screen">
            
                {
                    allposts?.map((post) => <AllPost key={post._id} post={post}></AllPost>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllPosts;