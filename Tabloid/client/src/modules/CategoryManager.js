import { getToken } from "./authManager";

const apiUrl = "/api/category"

export const getPublishedCategories = () => {
    return getToken().then(token => {
        return fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer${token}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("An unknown error occurred while trying to get Categories.");
            }
        })
    })
}