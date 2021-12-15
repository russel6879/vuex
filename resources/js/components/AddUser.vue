<template>
  <div>
      <div class="container bg-info p-5">
         
       <form @submit.prevent="onUserSubmit">
                 
   <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right text-white">Name</label>

                            <div class="col-md-6">
                                <input id="name" v-model="name" type="text" >

                              
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email"  class="col-md-4 col-form-label text-md-right text-white">Email</label>

                            <div class="col-md-6">
                                <input  v-model="email" id="email" type="email" >

                              
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right text-white">Password</label>

                            <div class="col-md-6">
                                <input id="password"  v-model="password" type="password" >

                            </div>
                        </div>
                           <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-warning">
                                   Register
                                </button>
                            </div>
                        </div>

                       

       </form>
   <div >{{animated}} </div>
      </div>

  </div>
</template>

<script>
 import {
    mapGetters,
    mapActions,
    mapState
  } from "vuex";

export default {
  name: 'AddUser',
  data(){
      return {
        name: '',
        email: '',
        password: '',
      }
  },
     computed:{
  ...mapGetters([
 
    'animated',
  
  ]),
},
       created() {
      this.fetchUsers()
    },
  methods:{
    ...mapActions(["addUsers","fetchUsers"]),
    onUserSubmit() {
        this.addUsers({
          name: this.name,
          email: this.email,
          password: this.password,
        })
           this.$store.dispatch('fetchUsers');
    },
    
  }
}
</script>