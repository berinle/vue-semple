<template>
  <div class="joke-container">
    <h2>Random Programming Joke</h2>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="joke" class="joke">
      <p v-if="joke.setup">{{ joke.setup }}</p>
      <p v-if="joke.delivery" class="delivery">{{ joke.delivery }}</p>
      <p v-else-if="joke.joke">{{ joke.joke }}</p>
    </div>
    <div v-else class="loading">Waiting for joke...</div>
    <button @click="fetchJoke" :disabled="loading" class="fetch-button">
      {{ loading ? 'Loading...' : 'Get Another Joke' }}
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'JokeDisplay',
  data() {
    return {
      joke: null,
      loading: false,
      error: null
    };
  },
  methods: {
    async fetchJoke() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('http://localhost:3001/api/jokes/random');
        if (response.data && (response.data.joke || (response.data.setup && response.data.delivery))) {
          this.joke = response.data;
        } else {
          throw new Error('Invalid joke format received');
        }
      } catch (error) {
        console.error('Error fetching joke:', error);
        this.error = error.response?.status === 404 
          ? 'Backend server not running. Please start the server with npm run dev:backend'
          : 'Failed to fetch joke. Please try again.';
        this.joke = null;
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.fetchJoke();
  }
};
</script>

<style scoped>
.joke-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.loading {
  text-align: center;
  color: #666;
  margin: 1rem 0;
}

.error {
  color: #dc3545;
  text-align: center;
  margin: 1rem 0;
}

.joke {
  margin: 2rem 0;
  line-height: 1.6;
}

.delivery {
  color: #42b983;
  font-weight: bold;
  margin-top: 1rem;
}

.fetch-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.fetch-button:hover {
  background-color: #3aa876;
}

.fetch-button:disabled {
  background-color: #a8d5c2;
  cursor: not-allowed;
}
</style> 