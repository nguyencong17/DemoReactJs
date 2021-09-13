
import axiosClient from "./axiosClient";
const productApi = {
    async getAll(params){
        //Transform _pages to _start (Cong thuc tinh _start = (_page - 1 ) * _limit)
        const newParams = {...params};
        newParams._start = !params._page || params._page <= 1 ? 0 :    (params._page - 1) * (params._limit || 50);
        //Remove un_needed key
        delete newParams._page;
        //fetch data (productList + count) 
        const productList = await axiosClient.get('/products', { params: newParams });
        const count = await axiosClient.get('/products/count', { params: newParams });
        //Build Response and return 
        return {
            data:productList,
            pagination: {
                page: params._page,
                limit: params._limit,
                total: count,
            },
        };
    },

    get(id){
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    add(data){
        const url = '/products';
        return axiosClient.post(url, data);
    },

    upadte(data){
        const url = `/products/${data.id}`;
        return axiosClient.get(url, data);
    },

    remove(id){
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    }
};

export default productApi;