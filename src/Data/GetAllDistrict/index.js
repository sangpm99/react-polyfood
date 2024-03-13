import axios from 'axios';
import {HOST} from '../constants';
const GetAllDistrict = async (cityId) => {
    try {
        const response = await axios.get(`${HOST}/province/getalldistrict?cityCode=${cityId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
// http://localhost:8080/province/getalldistrict?cityCode=01
export default GetAllDistrict;