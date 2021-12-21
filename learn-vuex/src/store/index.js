import Vuex from "vuex";
import Vue from "vue";

console.log(Vuex);
//使用插件
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    username:"xiaohong",
    age:18,
    users:[
      {
        username:"xiaoxiao",
        age:18,
      },
      {
        username:"dahei",
        age:19,
      }
    ]
  },
  mutations:{
    changeUsername(state,username){
      state.username = username; 
    },
    changeAge(state,{age}){
      state.age = age; 
    }
  },
  actions:{
    async changeUsername({commit},payload){
      setTimeout(() => {
        commit("changeUsername",payload);
      }, 2000);
    }
  },
  //全局计算属性
  getters:{
    tenYearsOld(state) {
      return state.age + 10;
    },
    findUserByAge(state){
      return (age) => {
        return state.users.filter((user) => {
          return user.age === age;
        })
      }
    }
  }
})
export default store;