import { getToken } from "./authManager";
const _apiUrl = "/api/Tag";

export const getAllTags = () => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("An unknown error occurred while trying to get tags.");
            }
          });
        });
      };

      export const addTag = (newTag) => {
        return getToken().then((token) => {
        return fetch(_apiUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newTag)
        }).then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("An unknown error occurred while trying to get tags.");
          }
        });
      });
    };

    export const getTagById = (tagId) => {
      return fetch(`${_apiUrl}/${tagId}`)
      .then(res => res.json())
  }

    export const update = (editedTag) => {
      return getToken().then((token) => {
      return fetch(`${_apiUrl}/${editedTag.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedTag)
      }).then((res) => {
        if (res.ok) {
          return 
        } else {
          throw new Error("An unknown error occurred while trying to get tags.");
        }
      });
    });
  };