<template>
  <main class="navbar">
    <img src='@/assets/altschoollogo.svg' alt="altschool icon" width="69" height="49" loading="eager"
      title="altschool-icon" />

    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/counter">Counter</router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>