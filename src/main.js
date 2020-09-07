import Vue from 'vue'
import vueResouce from 'vue-resource';
import App from './App.vue'

Vue.use(vueResouce);
// gobal define the address
Vue.http.options.root='https://vuejs-http-6a16d.firebaseio.com/data.json';
// put method override data 
// post method create seprate node root for unique data
// Vue.interceptors.push((request,next)=>{
//   console.log(request);
//   if(request.method == 'POST'){
//     request.method='PUT';
//   }
//   next(response=>{
// response.json=()=>{
// return{{message:response.body}}

// });
// });
new Vue({
  el: '#app',
  render: h => h(App)
})
