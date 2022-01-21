import { getToken } from "./authManager";

const apiUrl = "/api/comment"

export const getPostComments = (postId) => {
    return getToken().then(token => {
        return fetch(`${apiUrl}/${postId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("An unknown error occurred while trying to get comments.");
            }
        })
    })
}