// // crudFactory.js
// import { request } from "./httpClient.js";

// /**
//  * Genera métodos CRUD para una entidad
//  * @param {string} resource - nombre del recurso en la API (ej: "cliente")
//  * @returns {object} - métodos CRUD
//  */

// export function createCrud(resource) {
//   return {
//     getAll: () => request(`/${resource}`),
//     getById: (id) => request(`/${resource}/${id}`),
//     create: (data) => request(`/${resource}`, "POST", data, true),
//     update: (id, data) => request(`/${resource}/${id}`, "PUT", data, true),
//     remove: (id) => request(`/${resource}/${id}`, "DELETE", null, true)
//   };
// }



import * as http from "./httpClient.js";

export function createCrud(entity) {
  return {
    getAll: () => http.get(entity),
    getById: (id) => http.get(`${entity}/${id}`),
    create: (data) => http.post(entity, data),
    update: (id, data) => http.put(`${entity}/${id}`, data),
    delete: (id) => http.del(`${entity}/${id}`),
  };
}