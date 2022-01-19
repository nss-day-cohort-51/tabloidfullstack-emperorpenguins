import { getToken } from "./authManager";

const apiUrl = "/api/post"

export const getPublishedPosts = () => {
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
                throw new Error("An unknown error occurred while trying to get Posts.");
            }
        })
    })
}

export const getPostById = (id) => {
    return fetch(`${apiUrl}/${id}`)
        .then(res => res.json())
}