
// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Title from '../Shared/Title/Title';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Dashboard = () => {
    const [Allinfo, SetAllinfo] = useState([])
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/admin')
            .then(res => SetAllinfo(res.data))
    }, [axiosSecure])

    const {usercount  , taskcount , postscount } = Allinfo
    return (
        <div>
        <Title title={'Admin Dashboard'}></Title>
        {/* notice */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-3">
            {/* card 1 */}
            <div className="card  z-10 text-center w-auto text-white mb-3 border-2  bg-gradient-to-r from-slate-900/50   to-sky-950/70  lg:rounded-b-3xl border-b-2 border-sky-300 duration-500 hover:top-3  shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold text-2xl text-center">Total Users</h2>
                    <p className="text-2xl md:text-3xl font-Rubik font-extrabold">{usercount}</p>
                </div>
            </div>
            <div className="card text-center w-auto text-white mb-3 border-2  bg-gradient-to-r from-slate-900/50   to-sky-950/70  lg:rounded-b-3xl border-b-2 border-sky-300 duration-500 hover:top-3  shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold text-2xl text-center">Total Tasks</h2>
                    <p className="text-2xl md:text-3xl font-Rubik font-extrabold">{taskcount}</p>
                </div>
            </div>
            <div className="card text-center w-auto text-white mb-3 border-2  bg-gradient-to-r from-slate-900/50   to-sky-950/70  lg:rounded-b-3xl border-b-2 border-sky-300 duration-500 hover:top-3  shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold text-2xl text-center">Total Posts</h2>
                    <p className="text-2xl md:text-3xl font-Rubik font-extrabold">{postscount}</p>
                </div>
            </div>
            
        </div>
    </div>
    );
};

Dashboard.propTypes = {
    
};

export default Dashboard;