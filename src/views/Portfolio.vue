<template>
  <div id="portfolio" class="container-fluid portfolio-container">
    <div class="section-headline row">
      <div class="col-sm-12 mt-5 mb-5">
        <h2 class="headline-text">Portfolio</h2>
      </div>
    </div>
    <div class="row portfolio-box mt-5 mb-5">
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
  name: 'Portfolio',
  components: { projects },

  setup() {
    const projects = [
      {
        id: 1,
        title: 'Strona Wizytówka',
        description: 'Strona wizytówka, na którą teraz patrzysz',
        github: 'https://github.com/geralt1002',
        live: 'https://github.com/geralt1002',
        technology: 'HTML / SCSS / VUE',
        image: require('@/assets/img/portfolio.jpg'),
      },
      {
        id: 2,
        title: 'Pogodynka',
        description:
          'Pozwala sprawdzić aktualną pogodę w każdym miejscu na świecie oraz wiele innym informacji pogodowych',
        github: 'https://geralt1002.github.io/Weather-app-vue.js/',
        live: 'https://github.com/geralt1002/Weather-app-vue.js',
        technology: 'HTML / SCSS / VUE',
        image: require('@/assets/img/weather-app.jpg'),
      },
      {
        id: 3,
        title: 'Notatnik',
        description:
          'Aplikacja pozwalająca na tworzenie notatek w formacie Markdown',
        github: 'https://geralt1002.github.io/notes-app/',
        live: 'https://simple-notesapp.herokuapp.com/',
        technology: 'Vue 3 / SCSS / Node.js / Express.js / MongoDB',
        image: require('@/assets/img/notes-app.jpg'),
      },
      {
        id: 4,
        title: 'Meme Generator',
        description:
          'Prosta aplikacja pozawalająca na dodawanie napisów na dołączonym obrazie',
        github: 'https://geralt1002.github.io/Meme-Generator/dist/',
        live: 'https://github.com/geralt1002/Meme-Generator',
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
