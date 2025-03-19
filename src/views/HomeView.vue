<template>
  <div class="app">
    <Nav />
    <header id="header" class="page-header">
      <Header />
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
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Technologies from '@/components/Technologies.vue'
import Portfolio from '@/components/Portfolio.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'HomeComponent',
  components: {
    Nav,
    Header,
    About,
    Technologies,
    Portfolio,
    Contact,
  },
}
</script>
<style lang="scss"></style>
