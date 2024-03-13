import React from 'react';
import Admin from "./Admin";
import EmployeeNavbar from "./EmployeeNavbar";
import UserNavbar from "./UserNavbar";
import GuestNavbar from "./GuestNavbar";

function Navbar({props}) {
    return (
        <>
            {
                props === 'admin'
                    ? (<Admin />) : props === 'employee'
                        ? (<EmployeeNavbar />) : props === 'user'
                            ? (<UserNavbar />) : (<GuestNavbar />)
            }
        </>
    );
}

export default Navbar;