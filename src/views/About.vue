<template>
  <div id="about" class="about container">
    <section class="section-headline row mt-5 mb-5">
      <div class="col-sm-12">
        <h2 class="headline-text">O mnie</h2>
      </div>
    </section>
    <section class="row mt-5 mb-5">
      <div class="container-about col-sm-10">
        <p>
          <strong
            >Zajmuję się kodowaniem stron i aplikacji internetowych.</strong
          >
        </p>
        <p>
          Posiadam wykształcenie informatyczne. Informatyka zawsze mnie
          fascynowała. Po za programowaniem śledzę też nowinki z zakresu
          bezpieczeństwa sieciowego oraz hardware-u. Stale poszerzam swoją
          wiedzę w zakresie trendów i nowości w tej dziedzinie. Moje aplikacje
          wykorzystują najnowocześniejsze technologie oraz są przystosowane do
          wszystkich rozdzielczości. Przy tworzeniu kodu biorę pod uwagę takie
          rzeczy jak standardy W3C, semantyka i optymalizacja kodu.
        </p>

        <p>Zapraszam do współpracy.</p>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AboutView',
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
  z-index: 3;
}
@import '../scss/about_media_query';
</style>
