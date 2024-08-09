"use server"

import axios from 'axios';

const apiUrl = process.env.API_URL;

import { auth } from "~/lib/auth";
import { ChangePasswordPayload, UpdateProfileType } from '~/types';

export async function updateProfile({ payload }: { payload: UpdateProfileType }) {
    try {
        const session = await auth();   
        const userId = session?.user.id
        if (!userId) {
            return {message: "User Id is not set", data: {}, status_code: 400}
        }
        const request = await axios.patch(`${apiUrl}/api/v1/profile/${userId}`, payload, {
            headers: {
                Authorization: `Bearer ${session?.access_token}`,
            },
        });
        const response = request.data
        return response
    } catch (error) {
        console.log(error)
        return {message: "Error Occured creating user", data: {}, status_code: 500}
    }

}

export async function changeUserPassword({ payload }: { payload: ChangePasswordPayload}) {
    try {
        const session = await auth();   
        const userId = session?.user.id
        if (!userId) {
            return {message: "User Id is not set", data: {}, status_code: 400}
        }
        const request = await axios.post(`${apiUrl}/api/v1/auth/change-password`, payload, {
            headers: {
                Authorization: `Bearer ${session?.access_token}`,
            },
        });
        const response = request.data
        return response
    } catch (error) {
        console.log(error)
        return {message: "Error Occured making request", data: {}, status_code: 500}
    }
}