<template>
  <div id="app" class="app">  
        <NavBar />
        <MenuJobs/>
        <!-- Desde NavSearch se renderiza el componente CardJobs que contiene las tarjetas -->
        <NavBarSearch />
        <FooterJobs />
        </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import NavBarSearch from './components/NavBarSearch.vue'
import MenuJobs from './components/MenuJobs.vue'
import FooterJobs from './components/FooterJobs.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    NavBarSearch,
    MenuJobs, 
    FooterJobs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
