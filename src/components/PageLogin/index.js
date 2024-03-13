import React from 'react';
import PageDefault from "../PageDefault";

function PageLogin({children}) {
    return (
        <PageDefault>
            <div className="w-full flex flex-wrap bg-login">
                <div className="w-1/2"></div>
                <div className="w-1/2">
                    <div className="w-full flex items-center gb-min-h-full">
                        <div className="box flex items-start flex-wrap bg-white p-5 rounded-2xl">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </PageDefault>
    );
}

export default PageLogin;