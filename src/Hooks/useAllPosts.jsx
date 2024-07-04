
import { axiosSecure } from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllPosts = () => {
    const {data: allposts = [] ,  refetch } = useQuery({
        queryKey: ['allposts'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/posts`)
            return res.data
        }
    })
    return (
       [allposts , refetch ]
    );
};

export default useAllPosts;