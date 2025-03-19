<template>
  <section id="portfolio" class="portfolio">
    <div class="row gx-0 text-center portfolio__header">
      <div class="col-12">
        <h2 class="mt-5 mb-5 portfolio__title font-h2">Portfolio</h2>
      </div>
    </div>
    <div class="row gx-0 mt-5 mb-5 justify-content-center portfolio__content">
      <div
        v-for="project in projects"
        :key="project.id"
        class="col-xl-4 col-lg-4 col-md-6 col-sm-12 portfolio__item"
      >
        <div class="portfolio__overlay" role="button" tabindex="0" :aria-label="project.title">
          <div class="mt-3 text-center portfolio__overlay-content">
            <h4 class="portfolio__overlay-title font-h4">{{ project.title }}</h4>
            <p class="portfolio__overlay-description font-p">{{ project.description }}</p>
          </div>
          <div class="d-flex justify-content-center portfolio__links">
            <a
              v-if="project.github"
              :href="project.github"
              class="portfolio__link portfolio__link--github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="portfolio__icon portfolio__icon--github"
                src="../assets/img/icons/github.svg"
                :alt="project.title + ' GitHub'"
              />
            </a>
            <a
              v-if="project.live"
              :href="project.live"
              class="portfolio__link portfolio__link--live"
              target="_blank"
              rel="noopener noreferrer"
            >
              / Live
            </a>
          </div>
          <p class="portfolio__tech font-p-small">{{ project.technology }}</p>
        </div>
        <div class="portfolio__card card">
          <img :src="project.image" class="portfolio__image card-img-top" :alt="project.title" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const images = import.meta.glob('@/assets/img/*.jpg', { eager: true })

export default {
  name: 'PortfolioComponent',

  setup() {
    const projects = [
      {
        id: 1,
        title: 'Aplikacja Czat',
        description: 'Prosta aplikacja czat',
        github: 'https://github.com/geralt1002/Simple-Vue-Chat',
        live: 'https://chat-app-lh2l.onrender.com/',
        technology: 'HTML / SCSS / VUE / SOCKET.IO / NODE.JS / MONGODB',
        image: images['/src/assets/img/chat-app.jpg'].default,
      },
      {
        id: 2,
        title: 'Strona Wizytówka',
        description: 'Strona wizytówka, na którą teraz patrzysz',
        github: 'https://github.com/geralt1002/Portfolio-page',
        live: 'https://geralt1002.github.io/Portfolio-page/',
        technology: 'HTML / SCSS / VUE',
        image: images['/src/assets/img/portfolio.jpg'].default,
      },
      {
        id: 3,
        title: 'Pogodynka',
        description: 'Pozwala sprawdzić aktualną pogodę i inne informacje pogodowe',
        github: 'https://github.com/geralt1002/Weather-app-vue.js',
        live: 'https://geralt1002.github.io/Weather-app-vue.js/',
        technology: 'HTML / SCSS / VUE',
        image: images['/src/assets/img/weather-app.jpg'].default,
      },
      {
        id: 4,
        title: 'Notatnik',
        description: 'Aplikacja pozwalająca na tworzenie notatek w formacie Markdown',
        github: 'https://github.com/geralt1002/notes-app',
        live: 'https://notes-app-k7v6.onrender.com/',
        technology: 'VUE / SCSS / EXPRESS.JS / MONGODB',
        image: images['/src/assets/img/notes-app.jpg'].default,
      },
      {
        id: 5,
        title: 'Meme Generator',
        description: 'Prosta aplikacja pozawalająca na dodawanie napisów na dołączonym obrazie',
        github: 'https://github.com/geralt1002/Meme-Generator',
        live: 'https://geralt1002.github.io/Meme-Generator/dist/',
        technology: 'HTML / CSS / JS',
        image: images['/src/assets/img/meme_generator.jpg'].default,
      },
    ]
    return { projects }
  },
}
</script>

<style lang="scss" scoped>
@use '../scss/mixins/mixin_app.scss' as *;

.portfolio {
  &__title {
    text-transform: uppercase;
    font-weight: bold;
  }

  &__item {
    position: relative;
    cursor: pointer;
    padding: 0.5rem;

    &:hover,
    &:focus-within {
      .portfolio__overlay {
        opacity: 1;
        transform: scale(1);
        z-index: 3;
      }
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    opacity: 0;
    background: rgba(0, 0, 0, 0.7);
    @include flex_center;
    flex-direction: column;
    gap: 1rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    transform: scale(0.1);

    &:focus,
    &:focus-visible {
      opacity: 1;
      transform: scale(1);
      z-index: 3;
      outline: 2px solid white;
    }
  }

  &__overlay-title {
    font-weight: bold;
  }

  &__overlay-description {
    margin: 0 1rem;
  }

  &__links {
    .portfolio__icon--github {
      width: 2rem;
    }
  }

  &__link--live {
    font-weight: bold;
    background: -webkit-linear-gradient(#59d611 10%, #c2d307 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__tech {
    text-align: center;
  }
}
</style>
