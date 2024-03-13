import {HOST} from "../constants";
import axios from 'axios';

const GetProductByRange = async (low, high) => {
    try {
        const response = await axios.get(`${HOST}/product/getproductbyrange?low=${low}&high=${high}`);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi fetch dữ liệu sản phẩm theo giá:", error);
        throw error;
    }
};

export default GetProductByRange;