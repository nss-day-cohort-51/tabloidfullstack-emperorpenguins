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
            }
            else {
                throw new Error("An unknown error occurred while trying to get tags.");
            }
        });
    });
};


export const getCategoryById = (categoryId) => {
    return fetch(`${apiUrl}/${categoryId}`)
        .then(res => res.json())
}


export const updateCategory = (editedCategory) => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/${editedCategory.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedCategory)
        }).then((res) => {
            if (res.ok) {
                return
            }
            else {
                throw new Error("An unknown error occurred while trying to get Categories.");
            }
        });
    });
};


export const deleteCategory = (category) => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/${category}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category)
        }).then((res) => {
            if (res.ok) {
                return
            } else {
                throw new Error("An unknown error occurred while trying to get categorys.");
            }
        });
    });
};