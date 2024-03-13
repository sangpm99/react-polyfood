import React from 'react';
import SearchBox from "../SearchBox";
import Account from "../Account";
import CartIcon from "../CartIcon";
import {Route, Routes} from "react-router-dom";
import Login from "~/pages/Login";

function GuestNavbar() {
    return (
        <>
            <ul className="flex justify-end items-center">
                <li className="mx-2">
                    <SearchBox />
                </li>
                {/*<li className="mx-2">*/}
                {/*    <Account props="guest"/>*/}
                {/*</li>*/}
                <li className="mx-2">
                    <CartIcon />
                </li>
            </ul>
            <Routes>
                <Route to="/login" element={<Login />}/>
            </Routes>
        </>
    );
}

export default GuestNavbar;