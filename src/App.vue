<template>
  <div class="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
.app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

header {
  background-color: #42b983;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

main {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style> 