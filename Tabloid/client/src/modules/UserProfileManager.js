import { getToken } from "./authManager";
const _apiUrl = "/api/userprofile"
export const _getAllProfiles = () => {
    return getToken().then((token) =>
        fetch(`${_apiUrl}/getallprofiles`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => resp.json()));
}