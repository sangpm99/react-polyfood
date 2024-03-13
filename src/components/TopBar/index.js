import React from 'react';
import {Link} from "react-router-dom";
import './TopNav.scss';

function TopBar() {
    return (
        <div className="bg-primary top-nav flex items-center justify-center">
            <p className="text-xs lg:text-base text-white">
                <b>Giao hàng toàn quốc & nhanh chóng!</b>
                <Link className="px-2 link-secondary" to="/food">Đặt hàng ngay</Link>
            </p>
        </div>
    );
}

export default TopBar;