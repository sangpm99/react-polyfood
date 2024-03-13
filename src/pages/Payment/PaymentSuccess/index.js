import React, {useContext, useEffect} from 'react';
import PageDefault from "../../../components/PageDefault";
import Bread from "../../../components/Breadcrumb";
import {Button, Result} from "antd";
import {CartContext, UserContext} from "../../../contexts";
import SendInvoice from "../../../Data/SendInvoice";
import {MailContext} from "../../../contexts";

function PaymentSuccess() {
    const {cart, setCart} = useContext(CartContext);
    const {user, setUser} = useContext(UserContext);
    const {isSend, setIsSend} = useContext(MailContext);

    useEffect(() => {
        if(isSend === false) {
            if(cart.length !== 0 && Object.keys(user).length !== 0) {
                const send = async () => {
                    try {
                        await SendInvoice(user.email, user.body);
                    } catch (error) {
                        console.log("Gửi hóa đơn thất bại", error);
                    }
                }
                send();
            }
            setIsSend(true);
        }
        setCart([]);
        setUser({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PageDefault>
            <Bread>Đặt Hàng Thành Công</Bread>
            <Result
                className="color-primary"
                icon={
                    <div className="flex justify-center">
                        <img width="200px" src={require("~/assets/images/food-success.png")} alt="success"/>
                    </div>
                }
                title="Đặt hàng thành công!"
                subTitle="Thông tin đơn hàng sẽ được chuyển đến mail của quý khách trong ít phút nữa (Lưu ý có thể nằm trong mục thư rác), cảm ơn vì đã mua hàng !"
                extra={[
                    <Button href="/" className="btn-primary">Trang Chủ</Button>,
                ]}
            />
        </PageDefault>
    );
}

export default PaymentSuccess;