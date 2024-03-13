import {HOST} from '../constants';

const GetProductSale = async () => {
    try {
        const response = await fetch(`${HOST}/product/getproductsale`);
        if (!response.ok) {
            throw new Error(`Lỗi khi fetch dữ liệu sản phẩm giảm giá: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Lỗi khi fetch dữ liệu sản phẩm giảm giá:", error);
        throw error;
    }
};

export default GetProductSale;