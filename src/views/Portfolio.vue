<template>
  <div id="portfolio" class="container-fluid portfolio-container">
    <div class="section-headline row">
      <div class="col-sm-12 mt-5 mb-5">
        <h2 class="headline-text">Portfolio</h2>
      </div>
    </div>
    <div class="row portfolio-box mt-5 mb-5 justify-content-center">
      <projects
        v-for="object in projects"
        :key="object.id"
        :title="object.title"
        :description="object.description"
        :github="object.github"
        :live="object.live"
        :technology="object.technology"
        :image="object.image"
        class="box-item"
        :class="
          projects.length < 5
            ? 'col-xl-6 col-lg-6 col-md-6 col-sm-12'
            : 'col-xl-4 col-lg-4 col-md-6 col-sm-12'
        "
      ></projects>
    </div>
  </div>
</template>

<script>
import projects from '@/components/projects.vue'

export default {
  name: 'PortfolioView',
  components: { projects },

  setup() {
    const projects = [
      {
        id: 1,
        title: 'Aplikacja Czat',
        description: 'Prosta aplikacja czat',
        github: 'https://github.com/geralt1002/Simple-Vue-Chat',
        live: 'https://chat-app-lh2l.onrender.com/',
        technology: 'HTML / SCSS / VUE / SOCKET.IO / NODE.JS / MONGODB',
        image: require('@/assets/img/chat-app.jpg'),
      },
      {
        id: 2,
        title: 'Strona Wizytówka',
        description: 'Strona wizytówka, na którą teraz patrzysz',
        github: 'https://github.com/geralt1002/Portfolio-page',
        live: 'https://geralt1002.github.io/Portfolio-page/',
        technology: 'HTML / SCSS / VUE',
        image: require('@/assets/img/portfolio.jpg'),
      },
      {
        id: 3,
        title: 'Pogodynka',
        description:
          'Pozwala sprawdzić aktualną pogodę i inne informacje pogodowe',
        github: 'https://github.com/geralt1002/Weather-app-vue.js',
        live: 'https://geralt1002.github.io/Weather-app-vue.js/',
        technology: 'HTML / SCSS / VUE',
        image: require('@/assets/img/weather-app.jpg'),
      },
      {
        id: 4,
        title: 'Notatnik',
        description:
          'Aplikacja pozwalająca na tworzenie notatek w formacie Markdown',
        github: 'https://github.com/geralt1002/notes-app',
        live: 'https://notes-app-k7v6.onrender.com/',
        technology: 'VUE / SCSS / EXPRESS.JS / MONGODB',
        image: require('@/assets/img/notes-app.jpg'),
      },
      {
        id: 5,
        title: 'Meme Generator',
        description:
          'Prosta aplikacja pozawalająca na dodawanie napisów na dołączonym obrazie',
        github: 'https://github.com/geralt1002/Meme-Generator',
        live: 'https://geralt1002.github.io/Meme-Generator/dist/',
        technology: 'HTML / CSS / JS',
        image: require('@/assets/img/meme_generator.jpg'),
      },
    ]
    return { projects }
  },
}
</script>
<style lang="scss" scoped>
@import '../scss/mixins/mixins_app.scss';

.headline-text {
  @include flex_center;
  text-transform: uppercase;
}
</style>
