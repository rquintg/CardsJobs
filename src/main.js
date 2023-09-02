import Vue from 'vue'
import App from './App.vue'

// Importa el archivo de CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Importa el archivo JavaScript de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
