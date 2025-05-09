<template>
  <div class="home">
    <h1>Welcome to Vue Sample App</h1>
    <p>This is a sample Vue.js application that can be deployed both locally and to Cloud Foundry.</p>
    <div class="features">
      <div class="feature">
        <h2>Vue 3</h2>
        <p>Built with the latest version of Vue.js</p>
      </div>
      <div class="feature">
        <h2>Vite</h2>
        <p>Fast development and build times</p>
      </div>
      <div class="feature">
        <h2>Cloud Foundry Ready</h2>
        <p>Ready to deploy to any Cloud Foundry environment</p>
      </div>
    </div>
    <JokeDisplay />
  </div>
</template>

<script>
import JokeDisplay from '../components/JokeDisplay.vue'

export default {
  name: 'Home',
  components: {
    JokeDisplay
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature {
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature h2 {
  color: #42b983;
  margin-bottom: 1rem;
}
</style> 