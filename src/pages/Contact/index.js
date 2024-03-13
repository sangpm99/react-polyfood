import React from 'react';
import PageDefault from "~/components/PageDefault";
import Bread from "~/components/Breadcrumb";
import {FaMapMarked, FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

import './Contact.scss';

function Contact() {
    const phoneNumber = "0987654321";

    const handlePhone = () => {
        window.location.href = `tel:${phoneNumber}`;
    }

    return (
        <PageDefault>
            <Bread>Liên Hệ</Bread>
            <div className="my-contact p-body">
                <div className="flex flex-wrap lg:flex-nowrap gap-x-10 mt-1 lg:mt-10">
                    <div className="w-full lg:w-1/3 my-2 lg:my-0 border flex flex-wrap px-5 py-20 box" onClick={handlePhone}>
                        <div className="w-1/5 flex justify-center items-center">
                            <div className="icon bg-skin flex justify-center items-center">
                                <FaPhoneAlt className="text-2xl"/>
                            </div>
                        </div>

                        <div className="w-4/5 flex items-center ps-5">
                            <div>
                                <p className="text-2xl py-3">Điện Thoại</p>
                                <p className="py-1">+84 987 654 321</p>
                                <p className="py-1">+84 123 456 789</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 my-2 lg:my-0 border flex flex-wrap px-5 py-20 box" onClick={() => window.location.href="mailto:polyfood@gmail.com"}>
                        <div className="w-1/5 flex justify-center items-center">
                            <div className="icon bg-skin flex justify-center items-center">
                                <MdEmail className="text-3xl"/>
                            </div>
                        </div>

                        <div className="w-4/5 flex items-center ps-5">
                            <div>
                                <p className="text-2xl py-3">Email</p>
                                <p className="py-1">polyfood@gmail.com</p>
                                <p className="py-1">polyoffical@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 my-2 lg:my-0 border flex flex-wrap px-5 py-20 box" onClick={() => window.open("https://maps.app.goo.gl/d8H7bFisLWc56aE9A")}>
                        <div className="w-1/5 flex justify-center items-center">
                            <div className="icon bg-skin flex justify-center items-center">
                                <FaMapMarked className="text-3xl"/>
                            </div>
                        </div>

                        <div className="w-4/5 flex items-center ps-5">
                            <div>
                                <p className="text-2xl py-3">Địa Chỉ</p>
                                <p className="py-1">Số 30, Ngõ 304, Đường Hồ Tùng Mậu, Thị trấn Cầu Diễn, Quận Nam Từ Liêm, Thành phố Hà Nội</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="map my-10">
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.757010080174!2d105.76277877587279!3d21.042406487308554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c6c5375ad9%3A0x3e4cb136091480a1!2zMzAgTmcuIDMwNCDEkC4gSOG7kyBUw7luZyBN4bqtdSwgQ-G6p3UgRGnhu4VuLCBOYW0gVOG7qyBMacOqbSwgSMOgIE7hu5lpIDEwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1706779973800!5m2!1svi!2s" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                </div>
            </div>
        </PageDefault>
    );
}

export default Contact;