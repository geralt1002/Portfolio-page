<template>
  <div id="about" class="about container">
    <section class="section-headline row mt-5 mb-5">
      <div class="col-sm-12">
        <h2 class="headline-text">O mnie</h2>
      </div>
    </section>
    <section class="row mt-5 mb-5">
      <div class="container-about col-sm-10"></div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
@import '../scss/mixins/mixins_app.scss';

.headline-text {
  @include flex_center;
  text-transform: uppercase;
}
.container-about {
  width: 100%;
  text-align: center;
}
</style>
