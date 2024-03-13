import React from 'react';

function Loading() {
    return (
        <div
            style={{
                backgroundImage: "rgba(255,255,255,0.2)",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: "99999",
        }}
            className="flex justify-center items-center"
        >
            <img
                src={require("~/assets/images/Spinner.gif")}
                alt="gif"
            />
        </div>
    );
}

export default Loading;