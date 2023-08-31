<template>
  <div id="app">
    <img alt="PeakU logo" src="./assets/Logo-PeakU.png"  width="350" height="180" class="rounded">
    <Card/>
  </div>
</template>

<script>
import Card from './components/CardJobs.vue'

export default {
  name: 'App',
  components: {
    Card
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
  margin-top: 60px;
}
</style>
