
// import PropTypes from 'prop-types';

import Footer from "../../Shared/Footer/Footer";
import Navber from "../../Shared/Navber/Navber";
import '../../CustomCss/EarnPoints.css'
import logo from "../../../assets/images/coin.png"
import { SiThunderstore } from "react-icons/si";
import "../../CustomCss/custom-scrollbar.css"
import Task from "./Tasks/Task";

import useTaskComplete from "../../../Hooks/useTaskComplete";

const EarnPoints = () => {
    // -----------------------normal data fetching----------------------// 
    // const [ alltasks, SetALLtasks] = useState([])
    // const axiosSecure = useAxiosSecure()
    const [taskinfo] = useTaskComplete()
    // useEffect(() => {
    //     axiosSecure.get('/tasks')
    //         .then(res => SetALLtasks(res.data))

    // }, [axiosSecure])
    return (
        <div className="Earnbackgrnd">
            <Navber></Navber>
            <div className="min-h-screen">
                {/* top banner */}
                <div className="bg-gradient-to-r from-[#241c68e1]  via-[#060413] to-[#2d0250] py-5 md:py-11 h-80">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-white ml-20 mt-24 font-extrabold font-poppins tracking-widest">EARN QUMVA POINTS</h1>
                </div>
                {/* earn section */}
                <div className="flex flex-col md:flex-row gap-4 px-4 max-w-6xl mx-auto mt-4 md:mt-10 mb-6 h-auto md:h-screen ">
                    {/* info table */}
                    <div className="border-2 border-purple-700 w-full md:w-2/4 rounded-xl bg-gradient-to-l from-[#241c68e1]  via-[#560079] to-[#2d0250] px-4 py-4 h-full overflow-y-scroll ">
                        {/* total qumva points */}
                        <div className="flex flex-row items-center gap-3  font-poppins font-extrabold text-white  rounded-xl bg-gradient-to-l from-[#010103e1]  via-[#20002c] to-[#07000c] ">
                            <img className="h-24 px-3" src={logo} alt="qumva" />
                            {/* point info */}
                            <div>
                                <h1 className="text-xl md:text-2xl py-1"> Qumva Points</h1>
                                <h1 className="text-xl md:text-2xl">
                                    0 Points
                                </h1>
                            </div>
                        </div>
                        {/* extra information */}
                        <div className="flex flex-col py-1 px-4  gap-3  font-poppins font-extrabold text-white  rounded-xl bg-gradient-to-l  from-[#010103e1]  via-[#0d0013] to-[#07000c] mt-6 pb-4 md:pb-7">
                            {/* box 1 referred */}
                            <div className="flex justify-between items-center px-4 w-11/12 mx-auto  bg-gradient-to-l from-[#3c1c66]  via-[#1a0161] to-[#23026e] py-3 mt-4 rounded-xl ">
                                <h1 className="text-lg md:text-xl py-1">People I have Referred</h1>
                                <h1 className="py-2 px-4 bg-black font-poppins text-white rounded-xl">0</h1>
                            </div>
                            {/* box 2 people referred */}
                            <div className="flex justify-between items-center px-4 w-11/12 mx-auto  bg-gradient-to-l from-[#3c1c66]  via-[#1a0161] to-[#23026e] py-3 mt-4 rounded-xl ">
                                <h1 className="text-lg md:text-xl py-1">Referrals by People I have Referred</h1>
                                <h1 className="py-2 px-4 bg-black font-poppins text-white rounded-xl">0</h1>
                            </div>
                            {/* box 3 boost coins */}
                            <div className="flex justify-between items-center px-4 w-11/12 mx-auto  bg-gradient-to-l from-[#3c1c66]  via-[#1a0161] to-[#23026e] py-3 mt-4 rounded-xl mb-2 ">
                                <h1 className="text-lg md:text-xl py-1">Boost your Qumva Coins</h1>
                                <h1 className="py-2 px-4 text-2xl font-poppins text-white rounded-xl"><SiThunderstore /></h1>
                            </div>
                            {/* --------------------line info------------------ */}
                            <div className="text-white font-poppins text-sm font-bold w-11/12 mx-auto">
                                <h1>Complete Tasks</h1><br />
                                <h1>Earn PARAM Points</h1><br />
                                <h1>Claim Ecosystem Rewards</h1><br />
                                <h1>Join the Gaming Revolution Today!</h1>
                            </div>
                        </div>

                    </div>
                    {/* task table */}
                    <div className="border-2 border-purple-700 w-full md:w-1/2 h-screen rounded-xl mx-auto text-white font-poppins bg-gradient-to-l from-[#241c68e1]  via-[#560079] to-[#2d0250] overflow-y-scroll pb-6 ">
                       {
                        taskinfo?.map((singletask , index)=> <Task key={singletask._id} singletask={singletask} index={index}></Task>)
                       }
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

EarnPoints.propTypes = {

};

export default EarnPoints;