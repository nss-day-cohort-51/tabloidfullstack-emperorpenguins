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