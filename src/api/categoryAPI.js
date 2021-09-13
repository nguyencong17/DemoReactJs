import axiosClient from "./axiosClient";
const categoryApi = {
    getAll(params){
        const url = '/categories';
        return axiosClient.get(url, { params });
    },

    get(id){
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },

    add(data){
        const url = '/categories';
        return axiosClient.post(url, data);
    },

    upadte(data){
        const url = `/categories/${data.id}`;
        return axiosClient.get(url, data);
    },

    remove(id){
        const url = `/categories/${id}`;
        return axiosClient.delete(url);
    }
};

export default categoryApi;