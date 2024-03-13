import React, {useEffect, useState, useRef} from 'react';
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import './Header.scss';
import Navbar from "../NavBar";
import {Button, Drawer} from "antd";

const list = [
    {
        "id": 1,
        "label": "TRANG CHỦ",
        "link": "/",
        "name": "home"
    },
    {
        "id": 2,
        "label": "GIỚI THIỆU",
        "link": "/about",
        "name": "about"
    },
    {
        "id": 3,
        "label": "THỰC ĐƠN",
        "link": "/food",
        "name": "food",
    },
    {
        "id": 4,
        "label": "LIÊN HỆ",
        "link": "/contact",
        "name": "contact",
    },
]

function Header({props}) {
    const [active, setActive] = useState(1);
    const [open, setOpen] = useState(false);

    const initialNavbarHeight = '10rem'; // tham chiếu GlobalStyle.css : --header-width: 10rem;
    const scrollNavbarHeight = '7rem';

    const navbarRef = useRef(null);

    const [navbarHeight, setNavbarHeight] = useState(initialNavbarHeight);
    const [paddingNavbar, setPaddingNavbar] = useState('4rem');

    const currentURL = window.location.href;
    // http://localhost:3000/
    // ['http:', '', 'localhost:3000', '']
    const arr = currentURL.split("/").filter(function (string) {
        return string.length !== 0;
    });
    // ['http:', 'localhost:3000']


    useEffect(() => {
        if(arr.length === 2) {
            setActive(1);
        }
        else {
            for(let i = 0; i < arr.length; i++) {
                switch (arr[i]) {
                    case "about": {
                        setActive(2);
                        break;
                    }
                    case "food": {
                        setActive(3);
                        break;
                    }
                    case "contact": {
                        setActive(4);
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (navbarRef.current) {
            navbarRef.current.style.height = navbarHeight;
            navbarRef.current.style.paddingTop = paddingNavbar;
        }

    }, [navbarHeight, paddingNavbar]);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            setNavbarHeight(prevState => scrollNavbarHeight);
            setPaddingNavbar(prevState => '0')
        } else {
            setNavbarHeight(prevState => initialNavbarHeight);
            setPaddingNavbar(prevState => '4rem');
        }
    });

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    // active === item.id ? "mx-2 text-sm border-b active py-3" : "mx-2 text-sm border-b py-3"
    return (
        <>
            <Drawer title="Poly Food" onClose={onClose} open={open}>
                <ul className="navbar m-0">
                    {
                        list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={
                                        active === item.id ? "mx-2 text-sm border-b active py-3" : "mx-2 text-sm border-b py-3"
                                    }
                                >
                                    <Link className="link-primary" to={item.link}>{item.label}</Link>
                                </li>
                            )
                        })
                    }
                    <li className="mx-2 text-sm border-b py-3">
                        <Link className="link-primary" to="/cart">GIỎ HÀNG</Link>
                    </li>
                </ul>
            </Drawer>

            <div ref={navbarRef} className="my-header flex flex-wrap items-center justify-between py-5">
                <div className="hidden lg:block w-5/12">
                    <ul className="flex flex-wrap">
                        {
                            list && list.map((element, index) => {
                                return (
                                    <li className="me-5">
                                        <Link
                                            className={element.id === active ? "gb-active link-primary" : "link-primary"}
                                            to={element.link}
                                        >
                                            {element.label}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="w-2/12 flex justify-start lg:justify-center">
                    <div className="w-full lg:w-1/3">
                        <div className="logo cursor-pointer" onClick={() => window.location.href = "/"}>
                            <img className="w-full lg:h-full" src={require("~/assets/images/logo.png")} alt="logo"/>
                        </div>
                    </div>
                </div>
                <div className="w-2/12 lg:w-5/12">
                    <div className="hidden lg:block">
                        <Navbar props={props} />
                    </div>

                    <div className="flex lg:hidden justify-end">
                        <Button type="link" className="color-primary" onClick={showDrawer}>
                            <span className="text-xl">
                                <FaBars/>
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;