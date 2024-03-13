import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, Input, notification, Select} from "antd";
import TextArea from "antd/es/input/TextArea";
import {CartContext, UserContext} from "~/contexts";
import Address from "../Address";
import getUrlPayment from "~/Data/GetUrlPayment";
import {useNavigate} from 'react-router-dom';
import AddNewOrder from "~/Data/AddNewOrder";
import AddNewOrderDetail from "~/Data/AddNewOrderDetail";
import GetAddressByCode from "~/Data/GetAddressByCode";
import OrderInfo from "~/components/MailTemplate/OrderInfo";
import OrderDetailInfo from "~/components/MailTemplate/OrderDetailInfo";
import SendInvoice from "../../../../Data/SendInvoice";
import {MailContext} from "../../../../contexts";

function UserInfo() {
    const navigate = useNavigate();

    const {cart} = useContext(CartContext);
    const {setUser} = useContext(UserContext);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [originalPrice, setOriginalPrice] = useState(0);
    const [actualPrice, setActualPrice] = useState(0);
    const [note, setNote] = useState("");
    const [paymentId, setPaymentId] = useState(1);

    const [address, setAddress] = useState("");
    const [listAddress, setListAddress] = useState([]);

    const [load, setLoad] = useState(false);

    const {isSend, setIsSend} = useContext(MailContext);

    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        if(!isSend) {
            setIsSend(!isSend);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        let sum = 0;
        let sumOriginalPrice = 0;
        for(let i = 0; i < cart.length; i++) {
            if(cart[i].discount === 0) {
                sum += (cart[i].price * cart[i].quantity);
            }
            else {
                let newPrice = cart[i].price - (cart[i].discount * cart[i].price / 100);
                sum += (newPrice * cart[i].quantity)
            }
            sumOriginalPrice += (cart[i].price * cart[i].quantity);
        }
        setActualPrice(prevState => sum);
        setOriginalPrice(prevState => sumOriginalPrice);

    }, [cart]);

    useEffect(() => {
        let newStr = listAddress.join("|");
        setAddress(newStr);
    }, [listAddress]);

    const onFinish = async () => {
        // 1. Kiểm tra các các địa chỉ nhập đầy đủ chưa
        if (listAddress[0] &&
            listAddress[1] &&
            listAddress[2] &&
            listAddress[3].trim() !== "") {
            console.log(listAddress);
            setLoad(true);

            // 2. Truy vấn lấy ra địa chỉ người dùng chọn => AddressDetail <string>
            const findAddressDetail = async () => {
                try {
                    return await GetAddressByCode(listAddress);
                } catch (error) {
                    console.log("Lỗi khi fetch dữ liệu lấy thông tin địa chỉ khách hàng");
                }
            }

            const addressDetail = await findAddressDetail();

            const result = await AddNewOrder(
                fullName,
                email,
                phone,
                address,
                paymentId,
                originalPrice,
                actualPrice,
                note
            ); // return orderId

            // Cài ngày giờ đặt hàng (ngày giờ hiện tại)
            let date = new Date();
            let now = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            // Body của email (sẽ là kiểu email html)
            let body = OrderInfo(fullName, email, phone, addressDetail, note, now, actualPrice, paymentId);

            try {
                // result sẽ trả về orderId (vì thêm order phải thêm nhiều orderDetail cho nhiều sản phẩm có trong order)
                if (result !== 0) {
                    let i = 1;
                    const orderDetailPromises = cart.map(async (item) => {
                        const priceTotal = (item.price - (item.price * (item.discount / 100))) * item.quantity;
                        body += OrderDetailInfo(i, item, priceTotal);
                        i++;
                        return AddNewOrderDetail(item.productId, priceTotal, item.quantity, result);
                    });
                    await Promise.all(orderDetailPromises);
                    body += `</tbody> </table> </div> </div> </body> </html>`;
                    // Gửi mail
                }
            } catch (error) {
                console.error('Lỗi gửi thêm order: ', error);
            }
            setUser({
                "email": email,
                "body": body
            })
            if (paymentId === 1) {
                await SendInvoice(email, body);
                setLoad(false);
                navigate('/paymentsuccess');
            }
            // 4. Với hình thức thanh toán VNPay
            else if (paymentId === 2) {
                const result = await getUrlPayment(actualPrice);
                if (result.length !== 0) {
                    window.location.href = result;
                }
            }

        // Nếu địa chỉ nhập vào không đầy đủ sẽ cảnh báo
        } else {
            api["warning"]({
                message: "Vui lòng nhập đầy đủ địa chỉ",
                style: {
                    top: "15vh"
                },
            })
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {contextHolder}
            <p className="text-xl mb-5">Thông tin thanh toán</p>
            <div className="border p-5 mb-10">
                <Form
                    layout="vertical"
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    initialValues={{
                        payment: paymentId
                    }}
                >
                    <Form.Item
                        label="Họ tên"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy nhập họ tên',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Nhập họ tên"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy nhập số điện thoại',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Nhập số điện thoại"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy nhập email',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Nhập Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Item>

                    <Address listAddress={listAddress} setListAddress={setListAddress} />

                    <Form.Item
                        label="Ghi chú"
                        name="note"
                    >
                        <TextArea
                            row={5}
                            placeholder="Nhập ghi chú"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Phương thức thanh toán"
                        name="payment"
                    >
                        <Select
                            value={paymentId}
                            onChange={(value) => {
                                setPaymentId(prevState => value);
                            }}
                        >
                            <Select.Option value={1}>Thanh toán khi nhận hàng</Select.Option>
                            <Select.Option value={2}>Thanh toán trực tuyến</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="total"
                    >
                        <p className="font-bold">
                            Tổng thanh toán:&nbsp;
                            <span className="color-primary text-lg">
                                {actualPrice.toLocaleString()} VND
                            </span>
                        </p>
                    </Form.Item>

                    <Form.Item>
                        <p>
                            Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
                            <span className="text-blue-500"> Điều khoản Polyfood</span>,
                            vui lòng kiểm tra kỹ khi đặt hàng, thao tác này không thể hoàn tác
                        </p>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            className="btn-primary"
                            htmlType="submit"
                            loading={load}
                            style={{
                                cursor: load === true ? "not-allowed" : "pointer"
                            }}
                        >
                            ĐẶT HÀNG
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}

export default UserInfo;