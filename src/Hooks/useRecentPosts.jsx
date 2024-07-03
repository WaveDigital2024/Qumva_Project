
import useAllPosts from './useAllPosts';

const useRecentPosts = () => {
    const [allPosts, refetch] = useAllPosts();
    const recentPosts = allPosts.slice(0, 3); // Assuming the posts are sorted by date with the most recent first
    return [recentPosts, refetch];
};

export default useRecentPosts;