import axios from 'axios';
import {HOST} from '../constants';
const GetAddressByCode = async (listAddress) => {
    try {
        const city = await axios.get(`${HOST}/province/getcitybycode?cityCode=${listAddress[0]}`);
        const district = await axios.get(`${HOST}/province/getdistrictbycode?districtCode=${listAddress[1]}`);
        const ward = await axios.get(`${HOST}/province/getwardbycode?wardCode=${listAddress[2]}`);
        return `${city.data}, ${district.data}, ${ward.data}, ${listAddress[3]}`;
    } catch (error) {
        throw error;
    }
};
// http://localhost:8080/province/getcitybycode?cityCode=01
export default GetAddressByCode;