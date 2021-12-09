import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const actions={
    requestData(context){
        // 获取到100条数据，存进message
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (response)=>{
                context.commit('RequestData',response.data)
            }
            // ,
            // (error)=>{
            //     console.log(error.message)
            // }
            )
    }
}
const mutations={
    RequestData(state,value){
        state.message=value
        console.log(state.message)
    },
    Adddata(state,value){
        value=JSON.parse(value)
        state.message.unshift(value)
    }
}
const state={
    message:[],
    sum:1
}
export default new Vuex.Store({
    actions,
    mutations,
    state
})