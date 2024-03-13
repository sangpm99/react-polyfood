import React, {useEffect, useState} from 'react';
import Products from "../../../Food/components/Products";
import GetBestSeller from "~/Data/GetBestSeller";

function BestSellers() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        GetBestSeller()
            .then(data => setProducts(data))
            .catch(error => {
                // Handle the error if needed
            });

    }, []);

    return (
        <div className="my-best-seller py-10 flex flex-wrap justify-center p-body">
            <p className="gb-title capitalize w-full text-center">Sản phẩm bán chạy</p>
            <p className="text-center gb-sub-title w-full lg:w-1/2">
                <span>
                    Khám phá những ưu đãi đặc biệt trên sản phẩm được nhiều người lựa chọn, với
                    sự kết hợp tuyệt vời giữa chất lượng và giá trị độc đáo.
                </span>
                <span className="ms-1 hidden lg:block">
                    Hãy trải nghiệm hương vị xuất sắc từ sự chọn lựa hàng đầu của chúng tôi.
                </span>
            </p>
            {
                products ?
                    <Products products={products} box={8}/>
                    : <></>
            }
        </div>
    );
}

export default BestSellers;