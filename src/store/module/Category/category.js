import axios from "axios";
export default{
    namespaced:true,
    state:{
        category:null,
        error:null
    },
    getters:{
        getCategory(state){
            return state.category
        },
        getError(state){
            return state.error
        },
    },
    mutations:{
        SET_CATEGORY(state,data){
            state.category=data
        },
        SET_ERROR(state,data){
            state.error=data
        },
    },
    actions: {
        async index({commit})
        {
            let response=await axios.get('category');
            commit('SET_CATEGORY',response.data.category)
            return response
        },
        async store({commit},data)
        {
            let response= await axios.post('category',data)
            commit('SET_CATEGORY',response.data)
            return response
        },
        async find({commit},id)
        {
            let response= await axios.get(`category/${id}`)
            commit('SET_CATEGORY',response.data)
            return response
        },
        async update({commit},data){
            let response= await axios.put(`category/${data.id}`,data)
            commit('SET_CATEGORY',response)
            return response
        },
        async delete(_,id)
        {
            let response= await axios.delete(`category/${id}`)
            return response
        },
    }
}