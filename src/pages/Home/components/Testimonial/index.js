import {Carousel} from 'antd';
import React, {useRef} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

import './Testimonial.scss';

function Testimonial() {
    const carouselRef = useRef(null);
    const carouselRef2 = useRef(null);
    const data = [
        {
            "id": 1,
            "customName": "Mrs Trang",
            "position": "CEO",
            "image": "custom-1.png",
            "comment": "Trải nghiệm của tôi trên trang web này thật tuyệt vời! Những đồ ăn chân thực và đánh giá chi tiết giúp tôi tìm thấy những lựa chọn ẩm thực tuyệt vời."
        },
        {
            "id": 2,
            "customName": "Mrs Thu",
            "position": "Manager",
            "image": "custom-2.png",
            "comment": "Đối với tôi, món ăn không chỉ là món ăn, mà còn là văn hóa từng địa phương. Những hương vị độc đáo, những địa điểm nổi tiếng đều gói gọn trong hương vị đặc trưng."
        },
        {
            "id": 3,
            "customName": "Mr Quang",
            "image": "custom-3.png",
            "position": "Director",
            "comment": "Tôi là một người ưa thích ăn chay, thật khó để tìm thấy một cửa hàng ăn chay trực tuyến mà đảm bảo an toàn, giao hàng nhanh cũng như hương vị tuyệt vời. Tôi chắc chắn sẽ đặt mua nhiều hơn nữa trong tương lai."
        },
        {
            "id": 4,
            "customName": "Mrs Hoa",
            "position": "Gardener",
            "image": "custom-4.png",
            "comment": "Đối với tôi, trang web này không chỉ là một nguồn đồ ăn chay trực tuyến, mà còn là nguồn cảm hứng để tôi tự do sáng tạo trong bếp. Những gợi ý và bí quyết từ nhóm đánh giá giúp tôi mở rộng đồ ăn hàng ngày và thưởng thức ẩm thực đa dạng."
        },
        {
            "id": 5,
            "customName": "Mr Trung",
            "position": "Manager",
            "image": "custom-5.png",
            "comment": "Không chỉ là một hướng dẫn ẩm thực, trang web này còn là người bạn đồng hành đáng tin cậy trên hành trình khám phá văn hóa ẩm thực. Tôi cảm thấy như mình đã có một đồng đội chia sẻ niềm đam mê với những trải nghiệm độc đáo mỗi khi bước chân vào thế giới ẩm thực mới."
        },
        {
            "id": 6,
            "customName": "Mrs Nhi",
            "position": "Director",
            "image": "custom-6.png",
            "comment": "Cảm nhận không chỉ chia sẻ thông tin về thức ăn mà còn tạo ra một không gian tương tác, cho phép cộng đồng thực khách chia sẻ ý kiến và gợi ý, làm cho mỗi bữa ăn trở nên thú vị hơn."
        },
    ]

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }

        if (carouselRef2.current) {
            carouselRef2.current.next();
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }

        if (carouselRef2.current) {
            carouselRef2.current.prev();
        }
    };

    return (
        <div className="my-testimonial py-0 mt-5 lg:mt-0 lg:py-20 relative">
            <p className="gb-title capitalize w-full text-center mb-5">Cảm nhận khách hàng</p>
            <button className="absolute arrow arrow-left" onClick={handlePrev}>
                <IoIosArrowBack className="color-primary text-5xl"/>
            </button>
            <button className="absolute arrow arrow-right" onClick={handleNext}>
                <IoIosArrowForward className="color-primary text-5xl"/>
            </button>
            {/* Start For Pc */}
            <div className="hidden lg:block">
                <Carousel autoplay ref={carouselRef}>
                    <div className="flex space-x-20">
                        {
                            data.slice(0, 3).map((element, index) => {
                                return (
                                    <div key={index} className="w-1/3 box flex flex-wrap justify-center">
                                        <div className="img">
                                            <img src={require(`../../../../assets/images/${element.image}`)}
                                                 alt="Khách hàng"/>
                                        </div>
                                        <div className="comment text-center">
                                            <p className="font-bold color-primary text-3xl">{element.customName}</p>
                                            <p className="text-xl">{element.position}</p>
                                            <div className="flex relative">
                                                <p className="text-3xl font-bold color-primary heading-style absolute top-0 left-3">"</p>
                                                <p className="px-5 py-4">{element.comment}</p>
                                                <span
                                                    className="text-3xl font-bold color-primary heading-style absolute bottom-0 right-4">"</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex space-x-20">
                        {
                            data.slice(3, 6).map((element, index) => {
                                return (
                                    <div key={index} className="w-1/3 box flex flex-wrap justify-center">
                                        <div className="img">
                                            <img src={require(`../../../../assets/images/${element.image}`)}
                                                 alt="Khách hàng"/>
                                        </div>
                                        <div className="comment text-center">
                                            <p className="font-bold color-primary text-3xl">{element.customName}</p>
                                            <p className="text-xl">{element.position}</p>
                                            <div className="flex relative">
                                                <p className="text-3xl font-bold color-primary heading-style absolute top-0 left-3">"</p>
                                                <p className="px-5 py-4">{element.comment}</p>
                                                <span
                                                    className="text-3xl font-bold color-primary heading-style absolute bottom-0 right-4">"</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Carousel>
            </div>
            {/* End For Pc */}

            {/* Start For Mobile  */}
            <div className="block lg:hidden">
                <Carousel autoplay ref={carouselRef2}>
                    {
                        data.map((element, index) => {
                            return (
                                <div className="flex">
                                    <div key={index} className="box flex flex-wrap justify-center">
                                        <div className="img">
                                            <img src={require(`../../../../assets/images/${element.image}`)}
                                                 alt="Khách hàng"/>
                                        </div>
                                        <div className="comment text-center">
                                            <p className="font-bold color-primary text-3xl">{element.customName}</p>
                                            <p className="text-xl">{element.position}</p>
                                            <div className="flex relative">
                                                <p className="text-3xl font-bold color-primary heading-style absolute top-0 left-3">"</p>
                                                <p className="px-5 py-4">{element.comment}</p>
                                                <span
                                                    className="text-3xl font-bold color-primary heading-style absolute bottom-0 right-4">"</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
            {/* End For Mobile  */}
        </div>
    );
}

export default Testimonial;
