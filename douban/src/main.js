// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
// import resultList from './components/resultList.vue'
// import movies from './views/movie/movies.vue'
Vue.config.productionTip = false

Vue.use(VueRouter);

const routes=[
  // {path:'/',component:movies}
  // {path:'/movies',component:movies},
  // {path:'/movies/movieDetail/:id',name:'movieDetail',component:movieDetail},
  // {path:'/movies/movieSearch',name:'movieSearch',component:resultList},
  // {path:'/movies/list',name:'movieList',component:movieList}
];

const router=new VueRouter({
  routes
});

new Vue({
  router,
  // axios,
  // store,
  render: h => h(App)
}).$mount('#app');
