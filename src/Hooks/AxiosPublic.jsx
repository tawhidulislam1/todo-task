import  axios from "axios";


const axiosPublic = axios.create({
    baseURL: "https://gadget-heaven-server-alpha.vercel.app",
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;