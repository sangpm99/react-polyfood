import React, {useEffect, useState} from 'react';
import Products from "../../../Food/components/Products";
import GetAllProduct from "~/Data/GetAllProduct";

function NewProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        GetAllProduct()
            .then(data => setProducts(data))
            .catch(error => {
                // Handle the error if needed
            });

    }, []);

    return (
        <div className="my-best-seller py-10 flex flex-wrap justify-center p-body">
            <p className="gb-title capitalize w-full text-center">Sản phẩm mới nhất</p>
            <p className="text-center gb-sub-title w-full lg:w-1/2">Dễ dàng khám phá hương vị mới và chất lượng cao, trải nghiệm
                những món ăn tuyệt vời độc đáo, hãy là người đầu tiên trải nghiệm chúng.</p>
            {
                products ?
                    <Products products={products} box={4}/>
                    : <></>
            }
        </div>
    );
}

export default NewProducts;