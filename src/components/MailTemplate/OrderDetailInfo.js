function OrderDetailInfo(i, item, priceTotal) {
    return `
        <tr>
            <td style='border: 1px solid #4E7E38; padding: 1rem'>${i}</td>
            <td style='border: 1px solid #4E7E38; padding: 1rem'>${item.nameProduct}</td>
            <td style='border: 1px solid #4E7E38; padding: 1rem'>${priceTotal.toLocaleString()} VND</td>
            <td style='border: 1px solid #4E7E38; padding: 1rem'>${item.quantity}</td>
            <td style='border: 1px solid #4E7E38; padding: 1rem'>${(priceTotal * item.quantity).toLocaleString()} VND</td>
        </tr>
    `;
}

export default OrderDetailInfo;