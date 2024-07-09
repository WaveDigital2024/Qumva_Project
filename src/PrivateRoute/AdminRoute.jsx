
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/Authproviders';
import useUserInfo from '../Hooks/useUserInfo';
import { Navigate } from 'react-router-dom';

const AdminRoute =({children}) => {
    const { loading} = useContext(AuthContext)
    const [userinfo] = useUserInfo()

    if (loading) {
        return <div className='flex justify-center h-screen  items-center'>
            <span className="loading loading-spinner loading-lg "></span>
        </div>
    }

    if(userinfo[0]?.userRole === 'admin'){
        return children
    }

    return <Navigate to="/"></Navigate>

};

AdminRoute.propTypes = {
    children : PropTypes.node
};

export default AdminRoute;