<template>
  <div class="app">
    <header class="page-header">
      <HeaderView />
    </header>
    <main class="page-main">
      <About />
      <Technologies />
      <Portfolio />
    </main>
    <footer class="page-footer container-fluid">
      <Contact />
    </footer>
  </div>
</template>

<script>
import HeaderView from '@/views/Header.vue'
import About from '@/views/About.vue'
import Technologies from '@/views/Technologies.vue'
import Portfolio from '@/views/Portfolio.vue'
import Contact from '@/views/Contact.vue'

export default {
  name: 'AppPage',
  components: { HeaderView, About, Technologies, Portfolio, Contact },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html body {
  background-color: rgb(0, 0, 0);
  color: #fff;
  font-size: 18px;
  font-family: 'Kanit', sans-serif;
}
</style>
