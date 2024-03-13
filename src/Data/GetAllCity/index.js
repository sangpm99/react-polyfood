import {HOST} from "../constants";
import axios from 'axios';

const getAllCity = async () => {
    try {
        const response = await axios.get(`${HOST}/province/getallcity`);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi fetch dữ liệu tất cả thành phố:", error);
        throw error;
    }
};

export default getAllCity;
