import {HOST} from "../constants";
import axios from 'axios';

const GetProductsByType = async (id) => {
    try {
        const response = await axios.get(`${HOST}/product/getproductsbytype?id=${id}`);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi fetch dữ liệu sản phẩm theo danh mục:", error);
        throw error;
    }
};

export default GetProductsByType;