import React from 'react';
import './Deal.scss';

function Deal() {
    return (
        <div className="my-deal pt-10 flex flex-wrap justify-center bg-deal">
            <div className="mt-0 lg:mt-10 w-full flex justify-between items-center">
                <div className="w-1/3">
                </div>
                <div className="w-1/2">
                    <div className="w-full gap-x-10 mb-10 hidden lg:flex">
                        <div className="w-2/12">
                        </div>
                        <div className="w-9/12">
                            <p className="text-3xl font-light" >Ưu đãi giảm giá</p>
                        </div>
                    </div>

                    <div className="w-full flex gap-x-10 mb-10">
                        <div className="hidden lg:block w-2/12">
                        </div>
                        <div className="w-full lg:w-9/12 ms-2 lg:ms-0">
                            <p className="text-xl lg:text-3xl color-primary font-bold" >Giảm giá lên đến <span className="text-4xl italic">50%</span></p>
                        </div>
                    </div>

                    <div className="w-full gap-x-10 mb-10 hidden lg:flex">
                        <div className="w-2/12">
                        </div>
                        <div className="w-9/12">
                            <p className="text-3xl font-light mb-3" >100% thực phẩm chay</p>
                            <p>Sự kết hợp của thực phẩm tươi ngon và tốt cho sức khỏe, đảm bảo bạn nhận được hương vị nguyên bản và lợi ích dinh dưỡng tối ưu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Deal;