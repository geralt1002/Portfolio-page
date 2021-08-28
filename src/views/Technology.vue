<template>
  <div id="technology" class="container-fluid technology-container">
    <section class="section-headline row">
      <div class="col-sm-12 mb-5 mt-5">
        <h2 class="headline-text">Technologie</h2>
      </div>
    </section>

    <section class="row section-tech-boxes mt-5 mb-5">
      <div class="tech-box col-xl-1 col-lg-3 col-md-6 col-sm-6 col-6">
        <div class="box-item">
          <img
            src="../assets/img/html-file-extension-interface.svg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body mt-4">
            <p class="card-text">HTML</p>
          </div>
        </div>
      </div>
      <div class="tech-box col-xl-1 col-lg-3 col-md-6 col-sm-6 col-6">
        <div class="box-item">
          <img
            src="../assets/img/css-file-format.svg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body mt-4">
            <p class="card-text">CSS</p>
          </div>
        </div>
      </div>
      <div class="tech-box col-xl-1 col-lg-3 col-md-6 col-sm-6 col-6">
        <div class="box-item">
          <img src="../assets/img/js.svg" class="card-img-top" alt="..." />
          <div class="card-body mt-4">
            <p class="card-text">Javascript</p>
          </div>
        </div>
      </div>
      <div class="tech-box col-xl-1 col-lg-3 col-md-6 col-sm-6 col-6">
        <div class="box-item">
          <img src="../assets/img/vuejs.svg" class="card-img-top" alt="..." />
          <div class="card-body mt-4">
            <p class="card-text">Vue</p>
          </div>
        </div>
      </div>
      <div class="tech-box col-xl-1 col-lg-3 col-md-6 col-sm-6 col-6">
        <div class="box-item">
          <img src="../assets/img/sass.svg" class="card-img-top" alt="..." />
          <div class="card-body mt-4">
            <p class="card-text">Sass</p>
          </div>
        </div>
      </div>
      <div class="tech-box col-xl-1 col-lg-3 col-md-6 col-sm-6 col-6">
        <div class="box-item">
          <img
            src="../assets/img/bootstrap2.svg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body mt-4">
            <p class="card-text">Bootstrap</p>
          </div>
        </div>
      </div>
      <div class="tech-box col-xl-1 col-lg-3 col-md-6 col-sm-6 col-6">
        <div class="box-item">
          <img src="../assets/img/gulp.svg" class="card-img-top" alt="..." />
          <div class="card-body mt-4">
            <p class="card-text">Gulp</p>
          </div>
        </div>
      </div>
      <div class="tech-box col-xl-1 col-lg-3 col-md-6 col-sm-6 col-6">
        <div class="box-item">
          <img src="../assets/img/webpack.svg" class="card-img-top" alt="..." />
          <div class="card-body mt-4">
            <p class="card-text">Webpack</p>
          </div>
        </div>
      </div>
      <div class="tech-box col-xl-1 col-lg-3 col-md-6 col-sm-6 col-6">
        <div class="box-item">
          <img
            src="../assets/img/phone-tablet-and-laptop.svg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body mt-4">
            <p class="card-text">RWD</p>
          </div>
        </div>
      </div>
      <div class="tech-box col-xl-1 col-lg-3 col-md-6 col-sm-6 col-6">
        <div class="box-item">
          <img src="../assets/img/git.svg" class="card-img-top" alt="..." />
          <div class="card-body mt-4">
            <p class="card-text">GIT</p>
          </div>
        </div>
      </div>
      <div class="tech-box col-xl-1 col-lg-3 col-md-6 col-sm-6 col-6">
        <div class="box-item">
          <img
            src="../assets/img/wordpress.svg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body mt-4">
            <p class="card-text">Wordpress</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Technology',
}
</script>
<style lang="scss" scoped>
@import '../scss/mixins/mixins_app.scss';

.headline-text {
  @include flex_center;
  text-transform: uppercase;
}
.section-tech-boxes {
  @include flex_center;
  text-align: center;
}

.tech-box {
  @include flex_center;
  text-align: center;
  flex-direction: column;
  max-width: 100%;
}
.box-item {
  width: 6rem;
  height: 100%;
  margin-bottom: 1rem;
  @include flex_center;
  text-align: center;
  flex-direction: column;
  .card-img-top {
    max-width: 5rem;
    transform: translateY(0);
    transition: all 0.3s ease 0s;
  }
  .card-text {
    transform: translateY(0);
    transition: all 0.3s ease 0s;
  }
  &:hover {
    .card-img-top {
      transform: translateY(1rem);
    }
    .card-text {
      transform: translateY(-1rem);
    }
  }
}
</style>
