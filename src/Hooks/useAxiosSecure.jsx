import axios from 'axios';


export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

// http://localhost:5000
// https://api.qumva.com
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;