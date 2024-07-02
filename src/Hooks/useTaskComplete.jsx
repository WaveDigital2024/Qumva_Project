
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";


const useTaskComplete = () => {
    const {data: taskinfo = [] ,  refetch } = useQuery({
        queryKey: ['taskinfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks`)
            return res.data
        }
    })
    return (
       [taskinfo , refetch ]
    );
};

export default useTaskComplete;