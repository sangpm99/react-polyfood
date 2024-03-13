function OrderInfo(fullName, email, phone, addressDetail, note, now, actualPrice, paymentId) {
    return `
        <!doctype html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'>
            <meta http-equiv='X-UA-Compatible' content='ie=edge'>
            <title>Document</title></head>
        <body>
            <div style='border-width: 1rem 1px; border-color: #4E7E38; padding: 2rem'>
                <div style='display: flex'><p style='font-size: 200%; font-weight: bold'>Xác Nhận Đơn Hàng Tại PolyFood</p></div>
                <div style='padding: 1rem 0; display: flex; border-bottom: 1px solid #ccc'>
                    <div style='width: 50%'>
                        <p><b>Từ: </b>PolyFood</p>
                        <p><b>Email: </b>polyfood@gmail.com</p>
                        <p><b>Điện thoại: </b>0987654321</p>
                        <p><b>Địa chỉ: </b>30 Ngõ 304 Đường Hồ Tùng Mậu, Phú Diễn, Từ Liêm, Hà Nội</p>
                    </div>
                    <div style='width: 50%'>
                        <p><b>Đến: </b>${fullName}</p>
                        <p><b>Email: </b>${email}</p>
                        <p><b>Điện thoại: </b>${phone}</p>
                        <p><b>Địa chỉ: </b>${addressDetail}</p>
                        <p><b>Ghi chú: </b>${note}</p>
                    </div>
                </div>
            <div style='padding: 1rem 0'><p><b>Số hóa đơn: </b>poly_53123123</p>
                <p><b>Ngày đặt: </b>${now}</p>
                <p><b>Tổng cộng: </b>${actualPrice.toLocaleString()} VND</p>
                <p><b>Hình thức thanh toán: </b>${paymentId === 1 ? 'Thanh toán trực tiếp' : 'Thanh toán trực tuyến'}</p></div>
            <div>
            <table style='width: 100%; border: 1px solid #4E7E38; padding: 1rem; border-collapse: collapse; text-align: center; counter-reset: STT;'>
                <thead style='color: #fff; background-color: #4E7E38'>
                    <th style='border: 1px solid #4E7E38; padding: 1rem'>STT</th>
                    <th style='border: 1px solid #4E7E38; padding: 1rem'>Tên món</th>
                    <th style='border: 1px solid #4E7E38; padding: 1rem'>Giá tiền</th>
                    <th style='border: 1px solid #4E7E38; padding: 1rem'>Số lượng</th>
                    <th style='border: 1px solid #4E7E38; padding: 1rem'>Tổng cộng</th>
                </thead>
                <tbody>
    `;
}

export default OrderInfo;