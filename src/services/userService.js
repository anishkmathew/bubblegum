import http from "./httpService";
//import { apiUrl } from "../config.json";

const apiEndpoint = "/api/users";

function userUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getUsers() {
  return http.get(apiEndpoint);
}

export function getUser(userId) {
  return http.get(userUrl(userId));
}


export function saveUser(user,id) {
  
  const headers = {
    headers: {
      "content-type": "multipart/form-data"
    }
  };
  //return;
  return id
    ? http.post(userUrl(id), user, headers)
    : http.post(apiEndpoint, user, headers);
}

export function deleteUser(userId) {
  return http.delete(userUrl(userId));
}
