"use server";
/* eslint-disable prettier/prettier */
import axios from "axios";
import { auth } from "~/lib/auth";
import { getApiUrl } from "./getApiUrl";

export const getOrganizations = async (userId: string) => {
    try {
        const apiUrl = await getApiUrl();
        const session = await auth();
        
        const response = await axios.get(
            `${apiUrl}/api/v1/${userId}/organisations`,
            {
                headers: {
                    Authorization: `Bearer ${session?.access_token}`,
                }
            });

        return response?.data
    } catch {
        // return error
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchStripeUrl = async (json: any, callback: (parameter: any) => void) => {
    try {
        const apiUrl = await getApiUrl();
        const session = await auth();
        
        const response = await axios.post(`${apiUrl}/api/v1/payment/stripe`, json,
            {
                headers: {
                    Authorization: `Bearer ${session?.access_token}`,
                }
            }
        );
         
        
        callback(response)
    } catch(error) {
        return error
    }
}