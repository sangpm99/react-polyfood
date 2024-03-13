import React from 'react';
import City from "../City";
import {Form} from 'antd';

import {HOST} from '~/Data/constants';

function Address(props) {
    const {listAddress, setListAddress} = props;
    return (
        <>
            <Form.Item
                label="Chọn địa chỉ"
                name="address"
            >
                <City host={HOST} listAddress={listAddress} setListAddress={setListAddress}/>
            </Form.Item>
        </>
    );
}

export default Address;