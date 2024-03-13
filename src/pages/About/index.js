import React, {useState} from 'react';
import PageDefault from "../../components/PageDefault";
import Bread from "../../components/Breadcrumb";
import WhyUs from "../components/WhyUs";
import './About.scss';

function About() {
    const [noBackGround] = useState(true);
    return (
        <PageDefault>
            <Bread>Giới Thiệu</Bread>
            <div className="my-about">
                <WhyUs noBackground={noBackGround}/>
                <div className="w-full">
                    <div className="flex flex-wrap lg:flex-nowrap pt-20 gb-bg-light-skin">
                        <div className="w-full lg:w-1/2 flex lg:justify-end mx-2 lg:mx-0">
                            <div className="image-box relative">
                                <div className="img">
                                    <img src={require("~/assets/images/about-1.png")} alt="About 1"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-wrap items-center px-20vh">
                            <div>
                                <div className="box my-4">
                                    <img src={require("~/assets/images/why-us-1.png")} alt="whyus"/>
                                </div>
                                <p className="text-xl lg:text-3xl py-2 font-bold">Hương vị xanh mát từ Rau củ,</p>
                                <p className="text-xl lg:text-3xl py-2 font-bold">Sức khỏe dồi dào</p>
                                <p className="mt-5 description">
                                    Những món ăn chay tươi ngon, chất dinh dưỡng cao, mang đến sự tươi mới và
                                    năng lượng cho cơ thể. Đắm chìm trong thế giới xanh mát, bạn sẽ cảm nhận
                                    được lợi ích to lớn của việc ăn chay đối với sức khỏe.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row py-10 gb-bg-light-skin">
                        <div className="w-full lg:w-1/2 flex flex-wrap items-center px-20vh">
                            <div>
                                <div className="box my-4">
                                    <img src={require("~/assets/images/why-us-2.png")} alt="whyus"/>
                                </div>
                                <p className="text-xl lg:text-3xl py-2 font-bold">Niềm vui đến từ khu vườn,</p>
                                <p className="text-xl lg:text-3xl py-2 font-bold">Sự hài lòng của thiên nhiên</p>
                                <p className="mt-5 description">
                                    Tận hưởng hương vị tuyệt vời của những thực phẩm tươi ngon từ khu vườn,
                                    nơi mà mọi thứ đều tự nhiên và thuần khiết. Bạn không chỉ thưởng thức đồ ăn
                                    ngon mắt, mà còn trải nghiệm sự gần gũi với thiên nhiên mỗi khi thưởng thức
                                    mỗi bữa ăn.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex mt-5 lg:mt-0">
                            <div className="image-box relative mx-12 lg:mx-0">
                                <div className="img img-2">
                                    <img src={require("~/assets/images/about-2.png")} alt="About 1"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap lg:flex-nowrap pt-20 gb-bg-light-skin mb-10 lg:mb-0">
                        <div className="w-full lg:w-1/2 flex lg:justify-end mx-2 lg:mx-0">
                            <div className="image-box relative">
                                <div className="img">
                                    <img src={require("~/assets/images/about-3.png")} alt="About 3"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-wrap items-center px-20vh">
                            <div>
                                <div className="box my-4">
                                    <img src={require("~/assets/images/why-us-3.png")} alt="whyus"/>
                                </div>
                                <p className="text-xl lg:text-3xl py-2 font-bold">Thưởng thức bữa tiệc chay,</p>
                                <p className="text-xl lg:text-3xl py-2 font-bold">Đắm chìm trong điệu nhạc xanh tươi</p>
                                <p className="mt-5 description">
                                    Bữa tiệc chay là một tác phẩm nghệ thuật, một bức tranh ngập tràn màu
                                    xanh tươi. Sự sáng tạo trong việc kết hợp các loại rau củ tạo nên một
                                    bản hòa nhạc ngon lành cho vị giác, đồng thời là một cách hoàn hảo để
                                    thưởng thức hương vị của thực phẩm không thịt đầy đủ và đa dạng.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageDefault>
    );
}

export default About;