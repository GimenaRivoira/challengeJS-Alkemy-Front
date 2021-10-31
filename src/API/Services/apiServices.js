import http from '../http';

const apiServices = {
    create : (data) => http.post('api/create', data),
    getOne : (id) => http.put(`api/edit/${id}`)
}

export default apiServices;