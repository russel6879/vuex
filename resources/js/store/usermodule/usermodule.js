import axios from 'axios'

const state = { 
    users: [],
    animated:false
   
};

const getters = { 
    usersList: state => state.users,
   animated: state=> state.animated
};
const actions = { 
    async fetchUsers({commit}){
      const response = await axios.get("userList");     
      commit("setUsers", response.data)
    },
    async addUsers({commit}, user){
        state.animated=false 
      const response = await axios.post("addUser", user).then(res=>{
        state.animated=true  
      
      })
      state.animated=true
      commit("addNewUser", response.data)
    
     
    },
    async deleteUser({commit}, id){
      await axios.get(`deleteUser/${id}`);
      commit("removeUser", id)
    }
};
const mutations = { 
    setUsers: (state, users) => (
        state.users = users
    ),
    addNewUser: (state, user) => state.users.unshift(user.stste.animated=false),
    removeUser: (state, id) => (
        state.users.filter(user => user.id !== id),
        state.users.splice(user => user.id, 1)
    )
};
export default {
    state,
    getters,
    actions,
    mutations,   
}