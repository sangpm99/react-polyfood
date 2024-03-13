import React from 'react';

import './WhyUs.scss';

function WhyUs({noBackground}) {
    return (
        <div className={noBackground ? "my-why-us py-10 flex flex-wrap justify-center p-body" : "my-why-us bg-skin py-10 flex flex-wrap justify-center p-body"}>
            <p className="gb-title capitalize w-full text-center">Tại sao nên chọn chúng tôi</p>
            <p className="text-center gb-sub-title w-full lg:w-1/2">Với cam kết chất lượng và dịch vụ tận tâm, chúng tôi
                mang đến trải nghiệm độc đáo, từ sản phẩm đến không gian phục vụ. Đến với chúng tôi là chọn lựa đúng
                đắn cho sự hài lòng và trải nghiệm ẩm thực không giới hạn.</p>
            <div className="mt-10 w-full flex flex-wrap lg:flex-nowrap justify-between">
                <div className="w-full lg:w-1/3">
                    <img src={require("~/assets/images/whyus.png")} alt="Why Us"/>
                </div>
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                    <div className="w-full flex flex-wrap lg:flex-nowrap justify-center gap-x-10 mb-10">
                        <div className="w-1/3 lg:w-2/12 flex lg:block justify-center">
                            <img src={require("~/assets/images/why-us-1.png")} alt="Why Us"/>
                        </div>
                        <div className="w-full lg:w-9/12 mt-5 lg:mt-0 text-center lg:text-start">
                            <p className="text-2xl lg:text-3xl mb-3" >Thực phẩm tươi tốt cho sức khỏe</p>
                            <p>Sự kết hợp của thực phẩm tươi ngon và tốt cho sức khỏe, đảm bảo bạn nhận được hương vị nguyên bản và lợi ích dinh dưỡng tối ưu.</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap lg:flex-nowrap justify-center gap-x-10 mb-10">
                        <div className="w-1/3 lg:w-2/12 flex lg:block justify-center">
                            <img src={require("~/assets/images/why-us-2.png")} alt="Why Us"/>
                        </div>
                        <div className="w-full lg:w-9/12 mt-5 lg:mt-0 text-center lg:text-start">
                            <p className="text-2xl lg:text-3xl mb-3" >Trang trại hữu cơ</p>
                            <p>Sự kết hợp của thực phẩm tươi ngon và tốt cho sức khỏe, đảm bảo bạn nhận được hương vị nguyên bản và lợi ích dinh dưỡng tối ưu.</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap lg:flex-nowrap justify-center gap-x-10 mb-10">
                        <div className="w-1/3 lg:w-2/12 flex lg:block justify-center">
                            <img src={require("~/assets/images/why-us-3.png")} alt="Why Us"/>
                        </div>
                        <div className="w-full lg:w-9/12 mt-5 lg:mt-0 text-center lg:text-start">
                            <p className="text-2xl lg:text-3xl mb-3" >100% không hóa chất</p>
                            <p>Sự kết hợp của thực phẩm tươi ngon và tốt cho sức khỏe, đảm bảo bạn nhận được hương vị nguyên bản và lợi ích dinh dưỡng tối ưu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;