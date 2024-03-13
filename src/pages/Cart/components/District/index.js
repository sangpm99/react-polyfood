import React, {useEffect, useState} from 'react';
import { Select} from "antd";
import Ward from "../Ward";
import GetAllDistrict from "../../../../Data/GetAllDistrict";

function District(props) {
    const {host, city, listAddress, setListAddress} = props;
    const [districts, setDistricts] = useState([]);
    const [newDistricts, setNewDistricts] = useState([]);

    const [district, setDistrict] = useState(null);
    const [wardKey, setWardKey] = useState(0); // Key to unmount/remount Ward

    useEffect(() => {
        // Gọi API lấy danh sách district
        // if(city) {
        //     axios.get(`${host}p/${city}?depth=2`)
        //         .then((response) => {
        //             setDistricts(response["data"]["districts"]);
        //             setDistrict(null);
        //         });
        // }

        if(city) {
            const DistrictList = async () => {
                try {
                    const data = await GetAllDistrict(city);
                    setDistricts(data);
                    setDistrict(null);
                } catch (error) {
                    console.log("Lỗi khi fetch dữ liệu lấy tất cả quận huyện")
                }
            }
            DistrictList();
        }
    }, [city, host]);

    useEffect(() => {
        if (districts) {
            const newList = districts.map(list => {
                return {
                    value: list["districtCode"],
                    label: list["districtName"]
                }
            })
            setNewDistricts(newList);
        }
        else {
            setNewDistricts(null);
        }
    }, [districts]);

    const handleDistrict = (value) => {
        setDistrict(value);

        const newArr = [...listAddress];
        newArr[1] = value;
        setListAddress(newArr);

        setWardKey(prevKey => prevKey + 1); // Change the key to unmount/remount District
    }

    return (
        <>
            <Select
                className="mb-5"
                placeholder="Chọn Quận/Huyện"
                options={newDistricts}
                onChange={handleDistrict}
            />

            <Ward key={wardKey} host={host} district={district} listAddress={listAddress} setListAddress={setListAddress}/>
        </>
    );
}

export default District;