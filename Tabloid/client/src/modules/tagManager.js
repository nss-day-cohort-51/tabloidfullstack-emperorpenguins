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