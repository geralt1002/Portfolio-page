<template>
  <div id="contact" class="contact-container">
    <section class="section-headline row">
      <div class="col-sm-12 mb-3 mt-5">
        <h2 class="headline-text">Chcesz podjąć współpracę?</h2>
      </div>
      <!-- <div>
        <img class="background-img" src="../assets/img/background.svg" alt="" />
      </div> -->
    </section>
    <section class="contact-box row">
      <div class="contact-item col-12">
        <p class="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat
          error assumenda quidem dolor libero illum nulla accusamus nesciunt
          nostrum.
        </p>
        <div class="btn-box">
          <a class="btn btn-primary" href="#contact">
            <span>Napisz do mnie</span>
          </a>
        </div>
        <section class="section-contact">
          <p>Krzysztof Umiński</p>

          <a
            class="social-link"
            href="https://github.com/geralt1002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="social-icon-link"
              src="../assets/img/github.svg"
              alt=""
            />
          </a>

          <a
            class="social-link"
            href="https://www.linkedin.com/in/krzysztof-umi%C5%84ski/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="social-icon-link"
              src="../assets/img/linkedin.svg"
              alt=""
            />
          </a>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Contact',
}
</script>
<style lang="scss" scoped>
@import '../scss/mixins/mixins_app.scss';

.headline-text {
  @include flex_center;
  text-align: center;
  text-transform: uppercase;
}
.contact-item {
  @include flex_center;
  flex-direction: column;
  //   position: relative;
  z-index: 2;
  height: 50vh;
  width: 100%;
  p {
    text-align: center;
  }
}
.btn-box {
  @include flex_center;
  padding-top: 3rem;
  .btn-primary {
    padding: 1.5rem;
    font-size: 1.5rem;
    color: rgb(65, 68, 0);
    background: linear-gradient(rgb(89, 214, 17), rgb(187, 186, 150));

    &:hover {
      background: linear-gradient(rgb(187, 186, 150), rgb(89, 214, 17));
      color: rgb(65, 68, 0);
    }
  }
}
.section-contact {
  height: 20rem;
  width: 100%;
  @include flex_center;
  align-items: flex-end;
  p {
    text-transform: uppercase;
    font-size: 1.2rem;
    margin-right: 2rem;
    height: 4rem;
    margin: 1rem;
    @include flex_center;
  }
  .social-link {
    cursor: pointer;
    .social-icon-link {
      width: 2.2rem;
      height: 4rem;
      margin: 1rem 0.5rem;
      @include flex_center;
    }
  }
}
@import '../scss/contact_media_query.scss';
</style>
