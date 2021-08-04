<template>
  <div id="contact" class="contact-container">
    <section class="section-headline row">
      <div class="col-sm-12 mb-3 mt-5">
        <h2 class="headline-text">Chcesz podjąć współpracę?</h2>
      </div>
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

          <img class="social-icon-link" src="../assets/img/github.svg" alt="" />

          <img
            class="social-icon-link"
            src="../assets/img/linkedin.svg"
            alt=""
          />
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
.section-headline {
  width: 100%;
}
.headline-text {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}

.contact-box::after {
  content: '';
  position: absolute;
  bottom: 1;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 50%;
  background: linear-gradient(rgb(206, 208, 194), rgb(255, 255, 254));
  clip-path: circle(20% at 0% 60%);
  z-index: 1;
}
.contact-box::before {
  content: '';
  position: absolute;
  bottom: 1;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 50%;
  background: linear-gradient(rgb(206, 208, 194), rgb(255, 255, 254));
  clip-path: circle(15% at 99% 45%);
}
.contact-item {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  height: 50vh;
  width: 100%;
  p {
    text-align: center;
  }
}
.btn-box {
  display: flex;
  justify-content: center;
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
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: flex-end;
  p {
    text-transform: uppercase;
    font-size: 1.2rem;
    margin-right: 2rem;
    height: 4rem;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .social-icon-link {
    width: 2.2rem;
    height: 4rem;
    margin: 1rem 0.5rem;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
}
@import '../scss/contact_media_query.scss';
</style>
