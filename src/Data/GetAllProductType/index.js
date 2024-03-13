import {HOST} from "../constants";
const GetAllProductType = async () => {
    try {
        const response = await fetch(`${HOST}/product/getallproducttype`);
        if (!response.ok) {
            throw new Error(`Lỗi khi fetch dữ liệu lấy tất cả loại sản phẩm: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Lỗi khi fetch dữ liệu tất cả loại sản phẩm:", error);
        throw error;
    }
};

export default GetAllProductType;