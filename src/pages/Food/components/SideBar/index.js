import React, {useState} from 'react';
import './Sidebar.scss';
import {Link} from "react-router-dom";
import {Button, Form, InputNumber, Space, Tag} from "antd";

function SideBar({setCategory, productType, setRange, setIsSettingRange}) {
    const data = [
        {
            "id": 0,
            "to": "",
            "label": "Tất cả danh mục",
            "active": true
        },
        {
            "id": 1,
            "to": "",
            "label": "Món ăn bán chạy nhất",
            "active": false
        },
        {
            "id": 2,
            "to": "",
            "label": "Món ăn mới",
            "active": false
        },
        {
            "id": 3,
            "to": "",
            "label": "Giảm giá hấp dẫn",
            "active": false
        },
        {
            "id": 5,
            "to": "",
            "label": "Đồ uống",
            "active": false
        }
    ]
    const [list, setList] = useState(data);

    const [labelId, setLabelId] = useState(0);

    const [form] = Form.useForm();
    const onFinish = (values) => {
        const { from, to } = form.getFieldsValue(['from', 'to']);
        if (from === to) {
            form.setFields([
                { name: 'from', errors: ['Không được nhập hai số bằng nhau'] },
                { name: 'to', errors: ['Không được nhập hai số bằng nhau'] },
            ]);
            return;
        }
        setIsSettingRange(true);
        setRange([from, to]);
        setCategory(4);
    };
    const onReset = () => {
        form.resetFields();
    };

    const validatePositiveNumber = (_, value) => {
        if (value < 0) {
            return Promise.reject('Không được nhập số âm');
        }
        return Promise.resolve();
    };

    const handleClick = (id) => {
        const updatedList = list.map(item => ({
            ...item,
            active: item.id === id
        }));
        setList(updatedList);
        setCategory(id);
    };

    const handleLabel = (id) => {
        setLabelId(id);
        setCategory(id);
    }
    return (
        <div className="sidebar">
            <p className="gb-border-bot-2 pe-5 pb-3 text-xl">Danh mục sản phẩm</p>
            <ul className="link-p category">
                {
                    list.map((item, index) => (
                        <li key={index}>
                            <Link
                                className={item.active ? "link-active" : ""}
                                to={item.to}
                                onClick={() => handleClick(item.id)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <p className="gb-border-bot-2 pe-5 pb-3 text-xl">Khoảng giá</p>
            <div className="w-full py-5">
                <Form
                    form={form}
                    name="basic"
                    onFinish={onFinish}
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item
                        label="Từ"
                        name="from"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy nhập giá thấp nhất',
                            },
                            {   validator: validatePositiveNumber }
                        ]}
                    >
                        <InputNumber
                            className="w-full"
                            placeholder="Từ"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Đến"
                        name="to"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy nhập giá cao nhất',
                            },
                            {   validator: validatePositiveNumber }
                        ]}
                    >
                        <InputNumber
                            className="w-full"
                            placeholder="Đến"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            className="btn-primary mr-2"
                            htmlType="submit">
                            Áp dụng
                        </Button>

                        <Button
                            className="btn-primary mr-2"
                            onClick={onReset}
                        >
                            Xóa
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            <p className="gb-border-bot-2 pe-5 pb-3 text-xl">Nhãn</p>
            <div className="w-full py-5">
                <Space size={[0, 8]} wrap>
                    <Tag
                        className={labelId === 0 ? "cursor-pointer p-2 text-sm gb-tag-active" : "cursor-pointer p-2 text-sm gb-tag"}
                        color="success"
                        onClick={() => handleLabel(0)}
                    >Tất cả</Tag>
                    {
                        productType.map((element, index) => {
                            return (
                                <Tag key={index}
                                     className={labelId === element["productTypeId"] ? "cursor-pointer p-2 text-sm gb-tag-active" : "cursor-pointer p-2 text-sm gb-tag"}
                                     color="success"
                                     onClick={() => handleLabel(element["productTypeId"])}
                                >{element["nameProductType"]}</Tag>
                            )
                        })
                    }
                </Space>
            </div>
        </div>
    );
}

export default SideBar;