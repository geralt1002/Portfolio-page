<template>
  <section id="contact" class="container contact-section">
    <div class="row section-header">
      <div class="col-12 section-header__title">
        <h2 class="mb-3 mt-5 font-h2 section-header__headline">Chcesz podjąć współpracę?</h2>
      </div>
    </div>
    <div class="row justify-content-center contact-section__content">
      <div
        class="col-12 d-flex flex-column align-items-center justify-content-center contact-section__details"
      >
        <p class="font-p text-center contact-section__text">
          Jeśli chcesz mnie zatrudnić, pisz na adres
          <span class="contact-section__email">krzysztof.uminski1@gmail.com</span>
        </p>
        <div class="my-5 contact-section__button">
          <a class="btn btn-main font-p" href="mailto:krzysztof.uminski1@gmail.com">
            <span>Napisz do mnie</span>
          </a>
        </div>
        <div class="d-flex align-items-center contact-section__info">
          <p class="font-p mb-0 contact-section__name">Krzysztof Umiński</p>
          <div class="d-flex contact-section__social-links">
            <a
              class="mx-2 contact-section__social-link"
              href="https://github.com/geralt1002"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Krzysztofa Umińskiego"
            >
              <img
                class="contact-section__social-icon"
                src="../assets/img/icons/github.svg"
                alt="GitHub"
              />
            </a>
            <a
              class="mx-2 contact-section__social-link"
              href="https://www.linkedin.com/in/krzysztof-umi%C5%84ski/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Krzysztofa Umińskiego"
            >
              <img
                class="contact-section__social-icon"
                src="../assets/img/icons/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactComponent',
}
</script>

<style lang="scss" scoped>
@use '../scss/mixins/mixin_app.scss' as *;

.contact-section {
  margin-bottom: 3rem;

  &__content {
    min-height: 50vh;
  }

  &__email {
    text-decoration: underline;
    font-weight: 600;
  }

  &__name {
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
  }

  &__social-icon {
    width: 100%;
    max-width: 2.2rem;
    height: 2.2rem;
  }
}

.section-header {
  &__headline {
    @include flex_center;
    text-align: center;
    text-transform: uppercase;
  }
}

@media screen and (max-width: 768px) {
  .contact-section__social-icon {
    max-width: 1.8rem;
  }
}
</style>
