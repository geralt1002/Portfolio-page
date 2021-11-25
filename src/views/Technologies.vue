<template>
  <div id="technologies" class="container-fluid technologies-container">
    <section class="section-headline row">
      <div class="col-sm-12 mb-5 mt-5">
        <h2 class="headline-text">Technologie</h2>
      </div>
    </section>

    <section class="row section-technologies-boxes mt-5 mb-5">
      <skills
        v-for="item in technologies"
        :key="item.id"
        :title="item.title"
        :image="item.image"
        class="technologies-box col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6"
      ></skills>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

import skills from '@/components/skills.vue'

export default {
  name: 'Technologies',
  components: { skills },

  setup() {
    const technologies = [
      {
        id: 1,
        title: 'HTML',
        image: require('@/assets/img/html-file-extension-interface.svg'),
      },
      {
        id: 2,
        title: 'CSS',
        image: require('@/assets/img/css-file-format.svg'),
      },
      {
        id: 3,
        title: 'JS',
        image: require('@/assets/img/js.svg'),
      },
      {
        id: 4,
        title: 'Vue',
        image: require('@/assets/img/vuejs.svg'),
      },
      {
        id: 5,
        title: 'Sass',
        image: require('@/assets/img/sass.svg'),
      },
      {
        id: 6,
        title: 'Bootstrap',
        image: require('@/assets/img/bootstrap2.svg'),
      },
      {
        id: 7,
        title: 'Webpack',
        image: require('@/assets/img/webpack.svg'),
      },
      {
        id: 8,
        title: 'Gulp',
        image: require('@/assets/img/gulp.svg'),
      },
      {
        id: 9,
        title: 'RWD',
        image: require('@/assets/img/phone-tablet-and-laptop.svg'),
      },
      {
        id: 10,
        title: 'GIT',
        image: require('@/assets/img/git.svg'),
      },
      {
        id: 11,
        title: 'Node.js',
        image: require('@/assets/img/nodejs-icon.svg'),
      },
      {
        id: 12,
        title: 'Wordpress',
        image: require('@/assets/img/wordpress.svg'),
      },
    ]
    return { technologies }
  },
}
</script>
<style lang="scss" scoped>
@import '../scss/mixins/mixins_app.scss';

.headline-text {
  @include flex_center;
  text-transform: uppercase;
}
.section-technologies-boxes {
  @include flex_center;
  text-align: center;
}
</style>
