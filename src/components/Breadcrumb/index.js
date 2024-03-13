import React from 'react';

import './Breadcrumb.scss';

function Bread({children}) {
    return (
        <div className="w-full relative breadcrumb" >
            <img src={require("~/assets/images/Breadcrumb.png")} alt="" />
            <div className="text-box">
                <span className="text-2xl lg:text-5xl text-white dancing-style">{children}</span>
            </div>
        </div>
    );
}

export default Bread;