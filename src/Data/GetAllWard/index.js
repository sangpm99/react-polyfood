import axios from 'axios';
import {HOST} from '../constants';
const GetAllWard = async (districtId) => {
    try {
        const response = await axios.get(`${HOST}/province/getallward?districtCode=${districtId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
// http://localhost:8080/province/getallward?districtCode=001
export default GetAllWard;