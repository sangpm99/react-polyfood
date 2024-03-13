import React, {useEffect, useState} from 'react';
import {Select} from "antd";
import AddressDetail from "../AddressDetail";
import GetAllWard from "../../../../Data/GetAllWard";

function Ward(props) {
    const {host, district, listAddress, setListAddress} = props;
    const [wards, setWards] = useState([]);
    const [newWards, setNewWards] = useState([]);

    useEffect(() => {
        // Gọi API lấy danh sách ward
        // if(district) {
        //     axios.get(`${host}d/${district}?depth=2`)
        //         .then((response) => {
        //             setWards(response["data"]["wards"]);
        //         });
        // }

        if(district) {
            const WardList = async () => {
                try {
                    const data = await GetAllWard(district);
                    setWards(data);
                } catch (error) {
                    console.log("Lỗi khi fetch dữ liệu lấy tất cả quận huyện")
                }
            }
            WardList();
        }
    }, [district, host]);

    useEffect(() => {
        if (wards) {
            const newList = wards.map(list => {
                return {
                    value: list["wardCode"],
                    label: list["wardName"]
                }
            })
            setNewWards(newList);
        }
    }, [wards]);

    const handleWard = (value) => {
        const newArr = [...listAddress];
        newArr[2] = value;
        setListAddress(newArr);
    }

    return (
        <>
            <Select
                className="mb-5"
                placeholder="Chọn Phường/Xã"
                options={newWards}
                onChange={handleWard}
            />

            <AddressDetail listAddress={listAddress} setListAddress={setListAddress}/>
        </>
    );
}

export default Ward;