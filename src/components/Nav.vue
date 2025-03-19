<template>
  <nav
    ref="navbar"
    class="navbar navbar-expand-lg navbar-dark sticky-top bg-black"
    role="navigation"
    aria-label="Główna nawigacja"
  >
    <div class="container-fluid px-2 px-md-3">
      <a class="navbar-brand text-center text-lg-start" href="/" aria-label="Strona główna">
        <p class="fw-bold mb-0 text-start text-uppercase font-p-big">
          Krzysztof Umiński
          <small class="d-block font-p-small">front-end developer</small>
        </p>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Otwórz/Zamknij nawigację"
      >
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>
      </button>

      <!-- Menu -->
      <div id="navbarNav" class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav gap-lg-5 gap-3">
          <li class="nav-item font-p">
            <a v-smooth-scroll="{ offset: -50 }" class="nav-link" href="#header">Home</a>
          </li>
          <li class="nav-item font-p">
            <a v-smooth-scroll="{ offset: -50 }" class="nav-link" href="#about">O mnie</a>
          </li>
          <li class="nav-item font-p">
            <a v-smooth-scroll="{ offset: -50 }" class="nav-link" href="#technologies"
              >Technologie</a
            >
          </li>
          <li class="nav-item font-p">
            <a v-smooth-scroll="{ offset: -50 }" class="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item font-p">
            <a v-smooth-scroll="{ offset: -50 }" class="nav-link" href="#contact">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavComponent',
  setup() {
    return {}
  },
}
</script>

<style lang="scss">
@use '../scss/mixins/mixin_app.scss' as *;

.bg-black {
  background-color: rgb(206, 208, 194);
}

.navbar {
  &-brand {
    display: inline-block;
  }

  &-nav {
    .nav-link {
      color: #fff;
      cursor: pointer;

      &:hover {
        color: rgb(89, 214, 17);
      }

      &:focus-visible {
        border: 1px solid rgb(89, 214, 17);
      }
    }
  }

  &-collapse {
    transition: all 0.2s ease-in-out;
  }

  &-toggler {
    border: 0 !important;

    &:focus,
    &:active,
    &-icon:focus {
      outline: none !important;
      box-shadow: none !important;
      border: 0 !important;
    }
  }
}

.toggler-icon {
  width: 30px;
  height: 3px;
  background-color: #fff;
  display: block;
  transition: all 0.2s;
}

.middle-bar {
  margin: 5px auto;
}

.navbar-toggler[aria-expanded='true'] {
  .top-bar {
    transform: rotate(45deg);
    transform-origin: 10% 10%;
  }

  .middle-bar {
    opacity: 0;
    filter: alpha(opacity=0);
  }

  .bottom-bar {
    transform: rotate(-45deg);
    transform-origin: 10% 90%;
  }
}

.navbar-toggler[aria-expanded='false'] {
  .top-bar,
  .bottom-bar {
    transform: rotate(0);
  }

  .middle-bar {
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
</style>
