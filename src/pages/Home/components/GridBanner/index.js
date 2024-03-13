import React from 'react';

import './GridBanner.scss';
import {Link} from "react-router-dom";

function GridBanner() {
    return (
        <div className="my-grid-banner flex flex-wrap lg:flex-nowrap p-3-percent py-10 gap-x-10">
            <div className="w-full lg:w-1/3 box relative mb-3 lg:mb-0">
                <img src={require('~/assets/images/grid-banner-1.png')} alt="Grid Banner"/>
                <div className="w-1/2 absolute top-0 right-0 pt-10 ps-1 lg:ps-10 pe-0 lg:pe-4">
                    <p className="font-bold">100% tốt cho sức khỏe</p>
                    <p className="color-primary font-bold uppercase text-base lg:text-2xl lg:mb-5 py-2 lg:py-5">Sản phẩm hữu cơ</p>
                    <Link className="uppercase" to='/food'>Mua ngay</Link>
                </div>
            </div>

            <div className="w-full lg:w-1/3 box relative mb-3 lg:mb-0">
                <img src={require('~/assets/images/grid-banner-2.png')} alt="Grid Banner"/>
                <div className="w-1/2 absolute top-0 right-0 pt-10 ps-1 lg:ps-10 pe-0 lg:pe-4">
                    <p className="font-bold">Rau củ tự nhiên</p>
                    <p className="text-white font-bold uppercase text-base lg:text-2xl lg:mb-5 py-2 lg:py-5">Được làm hoàn toàn từ rau</p>
                    <Link className="uppercase" to='/food'>Mua ngay</Link>
                </div>
            </div>

            <div className="w-full lg:w-1/3 box relative">
                <img src={require('~/assets/images/grid-banner-3.png')} alt="Grid Banner"/>
                <div className="w-1/2 absolute top-0 right-0 pt-10 ps-1 lg:ps-10 pe-0 lg:pe-4">
                    <p className="font-bold">100% đồ chay</p>
                    <p className="color-primary font-bold uppercase text-base lg:text-2xl lg:mb-5 py-2 lg:py-5">An toàn sức khỏe</p>
                    <Link className="uppercase" to='/food'>Mua ngay</Link>
                </div>
            </div>
        </div>
    );
}

export default GridBanner;