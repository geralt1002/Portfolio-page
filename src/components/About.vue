<template>
  <section id="about" class="container about-section">
    <div class="row about-section__title">
      <div class="col-sm-12 about-section__title-text">
        <h2 class="mt-5 mb-5 about-section__headline font-h2">O mnie</h2>
      </div>
    </div>
    <section class="row mt-5 mb-5 about-section__content">
      <div class="col-sm-10 about-section__text">
        <p class="about-section__paragraph font-p">
          <strong>Zajmuję się kodowaniem stron i aplikacji internetowych.</strong>
        </p>
        <p class="about-section__paragraph font-p">
          Jestem frontend developerem z ponad dwuletnim doświadczeniem i wykształceniem
          informatycznym. Od zawsze pasjonuję się technologią &#8209;&nbsp;nie tylko programowaniem,
          ale także bezpieczeństwem sieciowym i sprzętem komputerowym. Regularnie śledzę nowinki
          branżowe i rozwijam swoje umiejętności, aby tworzyć nowoczesne, responsywne aplikacje
          zgodne ze standardami W3C. Zwracam uwagę na jakość kodu oraz dobre praktyki, co pozwala mi
          tworzyć wydajne i skalowalne rozwiązania.
        </p>

        <p class="about-section__paragraph font-p">Zapraszam do współpracy.</p>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: 'AboutComponent',
}
</script>

<style lang="scss" scoped>
@use '../scss/mixins/mixin_app.scss' as *;

.about-section__text {
  width: 100%;
  text-align: center;
  z-index: 3;
}
.about-section__headline {
  @include flex_center;
  text-transform: uppercase;
}
</style>
