import React, { useEffect, useState } from 'react';
import {Select } from "antd";
import District from "../District";
import GetAllCity from "../../../../Data/GetAllCity";

function City(props) {
    const {host, listAddress, setListAddress} = props;

    const [cities, setCities] = useState([]);
    const [newCities, setNewCities] = useState([]);
    const [city, setCity] = useState("");
    const [districtKey, setDistrictKey] = useState(0); // Key to unmount/remount District


    useEffect(() => {
        // // Gọi API lấy danh sách tỉnh thành
        // axios.get(`${host}?depth=1`)
        //     .then((response) => {
        //         setCities(response.data);
        //     });
        const cityList = async () => {
            try {
                const data = await GetAllCity();
                setCities(data);
            } catch (error) {
                console.log("Lỗi khi fetch dữ liệu lấy danh sách các thành phố");
            }
        }
        cityList();
    }, [host]);

    useEffect(() => {
        const newList = cities.map(list => {
            return {
                value: list["cityCode"],
                label: list["cityName"]
            }
        })
        setNewCities(newList);
    }, [cities]);

    const handleCity = (value) => {
        setCity(value);

        const newAddress = [...listAddress];
        newAddress[0] = value;
        setListAddress(newAddress);

        setDistrictKey(prevKey => prevKey + 1); // Change the key to unmount/remount District
    }

    return (
        <>
            <Select
                className="mb-5"
                placeholder="Chọn Tỉnh/Thành phố"
                options={newCities}
                onChange={handleCity}
                required={true}
            />

            <District key={districtKey} host={host} city={city} listAddress={listAddress} setListAddress={setListAddress} />
        </>
    );
}

export default City;