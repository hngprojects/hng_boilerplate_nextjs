import axios from "axios";

const API_URL = process.env.API_URL

export const getPreferences = async () => {
    try {
      await axios.get(API_URL + "/v1/regions");
    } 
    catch (error) {
      return error;
    }
};


export const savePreferences = async (data: any) => {
    try {
      await axios.post(API_URL + "/v1/regions", data);
    } 
    catch (error) {
      return error;
    }
};

export const updatePreferences = async (regionId: string, data: any) => {
    try {
      await axios.post(API_URL + "/v1/regions/" + regionId, data);
    } 
    catch (error) {
      return error;
    }
};