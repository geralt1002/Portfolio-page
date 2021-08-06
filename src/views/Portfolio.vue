<template>
  <div id="portfolio" class="portfolio-container">
    <div class="section-headline row">
      <div class="col-sm-12 mt-5 mb-5">
        <h2 class="headline-text">Portfolio</h2>
      </div>
    </div>
    <div class="row portfolio-box mt-5 mb-5">
      <div class="box-item col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <div class="card">
          <img
            src="../assets/img/laptop-336378_1920.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div class="box-item col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <div class="card">
          <img
            src="../assets/img/laptop-336378_1920.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div class="box-item col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <div class="card">
          <img
            src="../assets/img/laptop-336378_1920.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div class="box-item col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <div class="card">
          <img
            src="../assets/img/laptop-336378_1920.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div class="box-item col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <div class="card">
          <img
            src="../assets/img/laptop-336378_1920.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div class="box-item col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <div class="card">
          <img
            src="../assets/img/laptop-336378_1920.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Portfolio',
}
</script>
<style lang="scss" scoped>
@import '../scss/mixins/mixins_app.scss';

.headline-text {
  @include flex_center;
  text-transform: uppercase;
}
.portfolio-box {
  @include flex_center;
  .box-item {
    @include flex_center;
    padding: 0;
    margin: 0;
    //  max-width: 30rem;
    .card {
      margin: 0.5rem;
    }
  }
}
</style>
