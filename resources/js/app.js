require('./bootstrap');
import Vue from 'vue';
import LayoutApp from "./components/LayoutApp";
import router from "./router";
import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(MaterialKit);


const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});


const app = new Vue({
    el: '#app',
    router,
    components:{
        LayoutApp
    }
});
