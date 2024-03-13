import React, {useContext, useEffect, useState} from 'react';
import PageDefault from "~/components/PageDefault";
import {Link} from "react-router-dom";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import ButtonGroup from "antd/es/button/button-group";
import {Button, Empty, Modal} from 'antd';
import Bread from "~/components/Breadcrumb";
import {CartContext} from "~/contexts";
import UserInfo from "./components/UserInfor";

function Cart() {
    const {cart, setCart} = useContext(CartContext);
    let updatedCart = [...cart];

    const [empty, setEmpty] = useState(true);

    const [modal2Open, setModal2Open] = useState(false);

    useEffect(() => {
        if (cart.length !== 0) {
            setEmpty(false);
        } else {
            setEmpty(true)
        }
    }, [empty, cart]);

    const increase = (id) => {
        for (let i = 0; i < updatedCart.length; i++) {
            if (updatedCart[i].productId === id) {
                updatedCart[i].quantity++;
                break;
            }
        }
        setCart(updatedCart);
    };
    const decline = (id) => {
        for (let i = 0; i < updatedCart.length; i++) {
            if (updatedCart[i].productId === id) {
                if (updatedCart[i].quantity === 1) {
                    setModal2Open(true);
                } else {
                    updatedCart[i].quantity--;
                    break;
                }
            }
        }
        setCart(updatedCart);
    };

    const handleRemove = (id) => {
        const indexToRemove = updatedCart.findIndex(item => item.productId === id);
        if (indexToRemove !== -1) {
            updatedCart.splice(indexToRemove, 1);
            setCart([...updatedCart]);
        }
    }

    return (
        <div>
            <PageDefault>
                <Bread>Giỏ Hàng</Bread>
                {empty ? <Empty className="py-20" description="Chưa có thông tin"/> :

                    <div className="cart flex flex-wrap lg:flex-nowrap p-body gap-x-20 mt-5 lg:mt-10">
                        <div className="w-full lg:w-2/3">
                            <p className="text-xl mb-5">Giỏ hàng</p>
                            {
                                cart.map((item, index) => {
                                    return (
                                        <div key={index} className="flex border-0 lg:border my-5">
                                            <div className="w-1/3 lg:w-1/5">
                                                <Link to="">
                                                    <img
                                                        src={require(`../../assets/images/${item["avatarImageProduct"]}`)}
                                                        alt={item["nameProduct"]}
                                                    />
                                                </Link>
                                            </div>

                                            <div className="w-2/3 lg:w-4/5 py-0 px-5 lg:p-5 flex flex-col justify-between">
                                                <Link className="link-primary" to="">
                                                    <p className="capitalize text-base lg:text-lg font-bold">{item["nameProduct"]}</p>
                                                </Link>

                                                <p>
                                                    {
                                                        item["discount"] !== 0 &&
                                                        <span>
                                            <span className="font-bold color-primary text-sm lg:text-lg">
                                                {
                                                    (item["price"] - (item["discount"] * item["price"] / 100)).toLocaleString()
                                                } VND
                                            </span>
                                            <span className="px-2">
                                                -
                                            </span>
                                            </span>
                                                    }
                                                    <span
                                                        className={
                                                            item["discount"] !== 0 ? "sub-text line-through text-xs lg:text-base" : "font-bold color-primary text-sm lg:text-lg"}
                                                    >
                                            {item["price"].toLocaleString()} VND
                                        </span>
                                                </p>

                                                <ButtonGroup className="flex items-center">
                                                    <Button
                                                        className="btn-primary rounded-none"
                                                        onClick={() => decline(item.productId)} icon={<MinusOutlined/>}
                                                    />

                                                    <p className="px-5">{item.quantity}</p>
                                                    <Button
                                                        className="btn-primary rounded-none"
                                                        onClick={() => increase(item.productId)} icon={<PlusOutlined/>}
                                                    />

                                                    <Modal
                                                        title={<p className="color-primary">Đây là sản phẩm cuối, bạn có
                                                            chắc muốn xóa không</p>}
                                                        centered
                                                        open={modal2Open}
                                                        onOk={() => setModal2Open(false)}
                                                        onCancel={() => setModal2Open(false)}
                                                        footer={[
                                                            <div className="flex">
                                                                <Button
                                                                    onClick={() => {
                                                                        setModal2Open(false);
                                                                        handleRemove(item.productId)
                                                                    }}
                                                                    className="w-1/2 btn-primary" key="1">Có</Button>,
                                                                <Button
                                                                    onClick={() => setModal2Open(false)}
                                                                    className="w-1/2" key="2">Không</Button>,
                                                            </div>
                                                        ]}
                                                    />
                                                </ButtonGroup>

                                                <p className="font-bold text-base lg:text-lg">
                                                    Tổng cộng:&nbsp;
                                                    {
                                                        item["discount"] !== 0 &&
                                                        <span>
                                                    <span className="font-bold color-primary text-base lg:text-lg">
                                                        {
                                                            ((item["price"] - (item["discount"] * item["price"] / 100)) * item["quantity"]).toLocaleString()
                                                        } VND
                                                    </span>
                                                </span>
                                                    }
                                                    <span
                                                        className={
                                                            item["discount"] !== 0 ? "hidden" : "font-bold color-primary text-base lg:text-lg"}
                                                    >
                                            {(item["price"] * item["quantity"]).toLocaleString()} VND
                                        </span>
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="w-full lg:w-1/3">
                            <UserInfo/>
                        </div>
                    </div>
                }
            </PageDefault>
        </div>
    );
}

export default Cart;