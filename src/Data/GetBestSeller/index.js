import {HOST} from '../constants';

const GetBestSeller = async () => {
    try {
        const response = await fetch(`${HOST}/product/getbestseller`);
        if(!response.ok) {
            throw new Error(`Lỗi khi fetch dữ liệu sản phẩm bán chạy: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Lỗi khi fetch dữ liệu", error);
        throw error;
    }
};

export default GetBestSeller;