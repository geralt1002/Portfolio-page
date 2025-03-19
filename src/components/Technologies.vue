<template>
  <section id="technologies" class="px-2 technologies">
    <div class="row g-0 text-center technologies__header">
      <div class="col-12">
        <h2 class="mt-5 mb-5 technologies__title font-h2">Technologie</h2>
      </div>
    </div>

    <div class="mt-5 mb-5 technologies__container">
      <div class="row justify-content-center gx-0 gy-5">
        <div
          v-for="(techs, category) in categorizedTechs"
          :key="category"
          class="technologies__category"
        >
          <h3 class="technologies__category-title mb-5">{{ category }}</h3>
          <div class="row gx-0 gy-5">
            <div
              v-for="tech in techs"
              :key="tech.id"
              class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6"
            >
              <div class="technologies__item" role="button" tabindex="0" :aria-label="tech.title">
                <img
                  :src="tech.image"
                  :class="tech.id === 9 ? 'technologies__image--pinia' : 'technologies__image'"
                  :alt="tech.title"
                />
                <div class="technologies__info mt-3">
                  <p class="technologies__name font-p mb-0">{{ tech.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const images = import.meta.glob('@/assets/img/icons/*.svg', { eager: true })

export default {
  name: 'TechnologiesComponent',

  setup() {
    const categorizedTechs = {
      Frontend: [
        { id: 1, title: 'HTML', image: images['/src/assets/img/icons/html-icon.svg'].default },
        {
          id: 2,
          title: 'CSS',
          image: images['/src/assets/img/icons/css-file-format.svg'].default,
        },
        { id: 3, title: 'Sass', image: images['/src/assets/img/icons/sass-icon.svg'].default },
        {
          id: 4,
          title: 'Bootstrap',
          image: images['/src/assets/img/icons/bootstrap5-icon.svg'].default,
        },
        {
          id: 5,
          title: 'RWD',
          image: images['/src/assets/img/icons/phone-tablet-and-laptop.svg'].default,
        },
        { id: 6, title: 'JS', image: images['/src/assets/img/icons/js-icon.svg'].default },
        {
          id: 7,
          title: 'jQuery',
          image: images['/src/assets/img/icons/jquery-icon.svg'].default,
        },
        { id: 8, title: 'Vue.js', image: images['/src/assets/img/icons/vue-icon.svg'].default },
      ],
      'Narzędzia i Bundlery': [
        { id: 9, title: 'Vite', image: images['/src/assets/img/icons/vitejs-logo.svg'].default },
        {
          id: 10,
          title: 'Webpack',
          image: images['/src/assets/img/icons/webpack-icon.svg'].default,
        },
        { id: 11, title: 'Gulp', image: images['/src/assets/img/icons/gulp-icon.svg'].default },
      ],
      'Kontrola wersji i współpraca': [
        { id: 12, title: 'GIT', image: images['/src/assets/img/icons/git-icon.svg'].default },
        {
          id: 13,
          title: 'Gitlab',
          image: images['/src/assets/img/icons/gitlab-icon2.svg'].default,
        },
        { id: 14, title: 'Github', image: images['/src/assets/img/icons/github-icon.svg'].default },
      ],
      'Backend i Bazy Danych': [
        {
          id: 15,
          title: 'Node.js',
          image: images['/src/assets/img/icons/nodejs-icon.svg'].default,
        },
        {
          id: 16,
          title: 'MongoDB',
          image: images['/src/assets/img/icons/mongodb-icon.svg'].default,
        },
      ],
      CMS: [
        {
          id: 17,
          title: 'WordPress',
          image: images['/src/assets/img/icons/wordpress.svg'].default,
        },
      ],
    }

    return {
      categorizedTechs,
    }
  },
}
</script>

<style lang="scss" scoped>
@use '../scss/mixins/mixin_app.scss' as *;

.technologies {
  &__title {
    @include flex_center;
    text-transform: uppercase;
    font-weight: bold;
  }

  &__item {
    @include flex_center;
    flex-direction: column;
    justify-content: space-between !important;
    height: 100% !important;
    cursor: pointer;
    outline: none;
    transition:
      transform 0.3s ease-in-out,
      opacity 0.3s ease;

    &:hover,
    &:focus {
      .technologies__image {
        transform: translateY(0.4rem);
      }
      .technologies__name {
        transform: translateY(-0.3rem);
        opacity: 0.9;
      }
    }
  }

  &__image {
    width: 100%;
    max-width: 5rem;
    transition: transform 0.4s ease-in-out;

    &--pinia {
      max-width: 4rem;
    }
  }

  &__name {
    transition:
      transform 0.4s ease-in-out,
      opacity 0.3s ease;
  }
}
</style>
