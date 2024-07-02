import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import { AuthContext } from "../Providers/Authproviders";
import { useContext } from "react";


const useUserInfo = () => {
    const { user} = useContext(AuthContext);
    const {data: userinfo = [] ,  refetch } = useQuery({
        queryKey: ['userinfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`)
            return res.data
        }
    })
    return (
       [userinfo , refetch ]
    );
};

export default useUserInfo;