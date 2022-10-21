import axios from "axios";
export default{
    namespaced:true,
    state:{
        company:null,
        error:null
    },
    getters:{
        getCompany(state){
            return state.company
        },
        getError(state){
            return state.error
        },
    },
    mutations:{
        SET_COMPANY(state,data){
            state.company=data
        },
        SET_ERROR(state,data){
            state.error=data
        },
    },
    actions: {
        async index({commit})
        {
            let response=await axios.get('company');
            commit('SET_COMPANY',response.data.company)
            return response
        },
        async find({commit},id)
        {
            let response= await axios.get(`company/${id}`)
            commit('SET_COMPANY',response.data)
            return response
        }
    }
}