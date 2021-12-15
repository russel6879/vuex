<template>
    <div class="container">
    
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>
          
                    <div class="card-body">
                        
                   <div v-for="list in usersList">{{list.name}} </div>
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
  
   
  
         methods: {
      ...mapActions(["fetchUsers", "deleteUser"])
    },
    computed: {  ...mapGetters([
 
    'animated',
    'userList'
  
  ]),},
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