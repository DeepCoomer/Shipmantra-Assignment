import axios from "axios";

let host = "http://localhost:8000"

export const calculateDistance = async (startcity, endcity) => {
    try {
        let response = await axios.get(`${host}/api/cities/calculatecost?start=${startcity}&end=${endcity}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const getShipperData = async (city) => {
    try {
        let response = await axios.get(`${host}/api/shipper/data?city=${city}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}