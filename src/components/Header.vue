<template>
  <section class="home" role="region" aria-labelledby="home-title">
    <div class="row home__hero">
      <div class="col-sm-12 home__hero-box">
        <h1 id="home-title" class="font-h1 home__title">front-end developer</h1>
        <p class="font-p-bigger home__subtitle">Tworzę strony i aplikacje internetowe</p>

        <div class="home__btn-box">
          <a
            v-smooth-scroll
            class="btn btn-main font-p home__btn"
            href="#contact"
            role="button"
            aria-label="Skontaktuj się ze mną"
          >
            <span>Skontaktuj się ze mną</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style lang="scss">
@use '../scss/mixins/mixin_app.scss' as *;

.home {
  position: relative;
  overflow: hidden;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(206, 208, 194), rgb(255, 255, 254));
  }

  &::after {
    clip-path: circle(40% at 10% 10%);
  }

  &::before {
    clip-path: circle(20% at right 65%);
  }

  &__hero {
    position: relative;
    z-index: 2;
    height: 55rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  &__hero-box {
    align-content: center;
  }

  &__title {
    display: block;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    color: rgb(255, 252, 228);
    background: linear-gradient(
      to right,
      rgb(89, 214, 17) 10%,
      rgb(194, 211, 7) 50%,
      rgb(187, 186, 150) 60%
    );
    background-size: 200% auto;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 4s linear infinite;
  }

  &__subtitle {
    font-weight: 400;
    color: rgb(89, 214, 17);
    margin-top: 1rem;
  }

  &__btn-box {
    display: flex;
    justify-content: center;
    padding-top: 3rem;
  }
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

/* --- Responsive --- */

@media (max-width: 768px) {
  .home {
    &__hero {
      height: 30rem;
    }

    &__btn-box .btn-main {
      padding: 1rem 1.5rem;
    }
  }
}
</style>
