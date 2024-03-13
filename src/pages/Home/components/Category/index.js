import React from 'react';

import './Category.scss';
import {Link} from "react-router-dom";

function Category() {
    return (
        <div className="my-category flex flex-wrap lg:flex-nowrap gap-x-20 py-5 lg:py-20 p-body">
            <div className="w-full lg:w-1/4">
                <Link className="bounce" to="/food">
                    <div className="w-full flex justify-center items-center rounded-full">
                        <div className="box m-5 p-6 border border-dashed rounded-full border-primary">
                            <img src={require('~/assets/images/best.png')} alt="Best Seller"/>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="text-xl font-bold text-center mb-3">Sản phẩm bán chạy</p>
                        <p className="text-center">Khám phá ưu đãi tuyệt vời với sự pha trộn hoàn hảo của chất lượng và giá trị</p>
                    </div>
                </Link>
            </div>

            <div className="w-full lg:w-1/4">
                <Link className="bounce" to="/food">
                    <div className="w-full flex justify-center items-center rounded-full">
                        <div className="box m-5 p-7 border border-dashed rounded-full border-primary">
                            <img src={require('~/assets/images/new.png')} alt="Best Seller"/>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="text-xl font-bold text-center mb-3">Sản phẩm mới</p>
                        <p className="text-center">Đón nhận hương vị mới và sáng tạo! Thử ngay món ăn mới nhất
                            của chúng tôi</p>
                    </div>
                </Link>
            </div>

            <div className="w-full lg:w-1/4">
                <Link className="bounce" to="/food">
                    <div className="w-full flex justify-center items-center rounded-full">
                        <div className="box m-5 p-7 border border-dashed rounded-full border-primary">
                            <img src={require('~/assets/images/sale.png')} alt="Best Seller"/>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="text-xl font-bold text-center mb-3">Giảm giá ưu đãi</p>
                        <p className="text-center">Tiết kiệm lớn ngay hôm nay! Với những ưu đãi khủng,
                            mua sắm thông minh</p>
                    </div>
                </Link>
            </div>

            <div className="w-full lg:w-1/4">
                <Link className="bounce" to="/food">
                    <div className="w-full flex justify-center items-center rounded-full">
                        <div className="box m-5 p-6 border border-dashed rounded-full border-primary">
                            <img src={require('~/assets/images/drink.png')} alt="Best Seller"/>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="text-xl font-bold text-center mb-3">Đồ uống</p>
                        <p className="text-center">Thưởng thức đồ uống tuyệt vời hòa quyện hương vị tuyệt hảo</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Category;