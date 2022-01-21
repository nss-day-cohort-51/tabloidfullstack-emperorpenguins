import { getToken } from "./authManager";

const apiUrl = "/api/post"

export const getPublishedPosts = () => {
    return getToken().then(token => {
        return fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
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

export const getUserPosts = () => {
    return getToken().then(token => {
        return fetch(`${apiUrl}/userposts`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
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
    return getToken().then(token => {
        return fetch(`${apiUrl}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
    })
}

export const addPost = (newPost) => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("An unknown error occurred while trying to get posts.");
            }
        });
    });
};

export const update = (editedPost) => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/${editedPost.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedPost)
        }).then((res) => {
            if (res.ok) {
                return
            } else {
                throw new Error("An unknown error occurred while trying to get posts.");
            }
        });
    });
  };


export const deletePost = (post) => {
    return getToken().then((token) => {
      return fetch(`${apiUrl}/${post}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
      }).then((res) => {
        if (res.ok) {
          return
        } else {
          throw new Error("An unknown error occurred while trying to get posts.");
        }
      });
    });
  };
  


