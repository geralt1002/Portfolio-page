<template>
  <div id="portfolio" class="portfolio-container">
    <div class="section-headline row">
      <div class="col-sm-12 mt-5 mb-5">
        <h2 class="headline-text">Portfolio</h2>
      </div>
    </div>
    <div class="row portfolio-box mt-5 mb-5">
      <div class="box-item col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a class="item-link" href="#" target="_blank" rel="noopener noreferrer">
          <div class="box-item_hover">
            <h3 class="item-title_hover">project title</h3>
            <p class="item_desc_hover">project description</p>
          </div>
          <div class="card">
            <img
              src="../assets/img/laptop-336378_1920.jpg"
              class="card-img-top"
              alt="..."
            />
          </div>
        </a>
      </div>
      <div class="box-item col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a class="item-link" href="#" target="_blank" rel="noopener noreferrer">
          <div class="box-item_hover">
            <h3 class="item-title_hover">project title</h3>
            <p class="item_desc_hover">project description</p>
          </div>
          <div class="card">
            <img
              src="../assets/img/laptop-336378_1920.jpg"
              class="card-img-top"
              alt="..."
            />
          </div>
        </a>
      </div>
      <div class="box-item col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a class="item-link" href="#" target="_blank" rel="noopener noreferrer">
          <div class="box-item_hover">
            <h3 class="item-title_hover">project title</h3>
            <p class="item_desc_hover">project description</p>
          </div>
          <div class="card">
            <img
              src="../assets/img/laptop-336378_1920.jpg"
              class="card-img-top"
              alt="..."
            />
          </div>
        </a>
      </div>
      <div class="box-item col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a class="item-link" href="#" target="_blank" rel="noopener noreferrer">
          <div class="box-item_hover">
            <h3 class="item-title_hover">project title</h3>
            <p class="item_desc_hover">project description</p>
          </div>
          <div class="card">
            <img
              src="../assets/img/laptop-336378_1920.jpg"
              class="card-img-top"
              alt="..."
            />
          </div>
        </a>
      </div>
      <div class="box-item col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a class="item-link" href="#" target="_blank" rel="noopener noreferrer">
          <div class="box-item_hover">
            <h3 class="item-title_hover">project title</h3>
            <p class="item_desc_hover">project description</p>
          </div>
          <div class="card">
            <img
              src="../assets/img/laptop-336378_1920.jpg"
              class="card-img-top"
              alt="..."
            />
          </div>
        </a>
      </div>
      <div class="box-item col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a class="item-link" href="#" target="_blank" rel="noopener noreferrer">
          <div class="box-item_hover">
            <h3 class="item-title_hover">project title</h3>
            <p class="item_desc_hover">project description</p>
          </div>
          <div class="card">
            <img
              src="../assets/img/laptop-336378_1920.jpg"
              class="card-img-top"
              alt="..."
            />
          </div>
        </a>
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
    position: relative;
    &:hover {
      .box-item_hover {
        z-index: 2;
        opacity: 1;
        @include flex_center;
        flex-direction: column;
        cursor: pointer;
        -ms-transform: scale(1);
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
    .item-link {
      color: #fff;
    }
    .box-item_hover {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.7);
      position: absolute;
      z-index: 2;
      text-align: center;
      opacity: 0;
      transition: all 0.5s ease-in-out;

      -ms-transform: scale(0.1);
      -webkit-transform: scale(0.1);
      transform: scale(0.1);
    }
    .card {
      margin: 0.5rem;
    }
  }
}
</style>
