<template>
    <div class="container">
      
        <div class="row justify-content-center mt-3">
            <div class="col-md-12  bg-">
                  <div class="card  bg-secondary" :class="{'bounce animated': animated}"  @animationend="animated = true||false">
                    <div class="card-header text-white">User List{{animated}}</div>
          
                    <div class="card-body">
                        
                   <div v-for="list in usersList"><p class="text-white text-bold" >{{list.name}}</p> <small class="text-danger delete" @click="deleteUser(list.id)">&#10005;</small> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";

  export default {
    name: 'Users',
  
    methods: {
      ...mapActions(["fetchUsers", "deleteUser"])
    },
    computed: mapGetters(["usersList","animated"]),
    created() {
      this.fetchUsers()
    }
  }
</script>

<style>
 .delete {
   font-size: 18px;
   cursor: pointer;
 }
</style>
