<template>
<div class="container">
  <div class="row">
      <div class="col-xs-12 col-sm-8 col-md-6  col-sm-offset-2 col-sm-offset-3">
        <h2>HTTp</h2>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
          <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
         <button class="btn btn-primary" @click="fetchData">Get Data</button>
         <ul class="list-group">
           <li class="list-group-item" v-for="us in users">{{ us.username }} | {{ us.email }}</li>
         </ul>

      </div>
  </div>
</div>

</template>
<script>
export default {
  data(){
    return{
      user:{
        username:'',
        email:''
      },
      users:[]
    };
  },
  methods:{
    submit(){
      // console.log(this.user);
      // first arg is https://vuejs-http-6a16d.firebaseio.com/data.json is globally define in main.js
      this.$http.post('',this.user)
      .then(response => {
        console.log(response)
      },error =>{
        console.log(error)
      });
      
    },
    fetchData(){
      this.$http.get('')
      .then(response=>{
        return response.json();
      })
      .then(data=>{
        const  resultArr=[];
        for(let key in data){
          resultArr.push(data[key]);
        }
        this.users=resultArr;
      })

    }
  }
}
</script>
<style scoped>

</style>