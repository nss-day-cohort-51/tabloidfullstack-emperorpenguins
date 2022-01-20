import { getToken } from "./authManager";
const apiUrl = "/api/category";

export const getAllCategories = () => {
    return getToken().then(token => {
        return fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            else {
                throw new Error("An unknown error occurred while trying to get Categories.");
            }
        });
    });
};

export const addCategory = (newCategory) => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCategory)
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("An unknown error occurred while trying to get tags.");
            }
        });
    });
};