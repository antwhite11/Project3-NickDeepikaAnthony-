import axios from "axios";

export default {

    getProducts: function(){
        return axios.get("/api/products")
    },

    getProduct: function(name){
        return axios.get("/api/products/searchbyname?searchterm=" + name )
    },

    sortProducts: function(sort){
        return axios.get("/api/products/sortbyprice?sort=" + sort)
    },

    postOrders: function(){
        return axios.post("/api/orders")
    },

    getOrderHistory: function(id){

        return axios.get("/api/orders/" + id + "/orderhistory")
    },

    

}