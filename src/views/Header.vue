<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" aria-current="page" to="/">
          <h1>Krzysztof Umiński <small>front-end developer</small></h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbarNav"
          class="collapse navbar-collapse justify-content-end"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#home">Home </a>
            </li>
            <li class="nav-item">
              <a
                v-smooth-scroll
                class="nav-link"
                aria-current="page"
                href="#about"
                >O mnie</a
              >
            </li>
            <li class="nav-item">
              <a
                v-smooth-scroll
                class="nav-link"
                aria-current="page"
                href="#technology"
                >Technologie</a
              >
            </li>
            <li class="nav-item">
              <a
                v-smooth-scroll
                class="nav-link"
                aria-current="page"
                href="#portfolio"
                >Portfolio</a
              >
            </li>
            <li class="nav-item">
              <a
                v-smooth-scroll
                class="nav-link"
                aria-current="page"
                href="#contact"
                >Kontakt</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="row container-hero">
      <div class="col-sm-12 hero-box">
        <h2 class="hero-title">front-end developer</h2>
        <h3>Tworzę strony i aplikacje internetowe</h3>
        <div class="btn-box">
          <a v-smooth-scroll class="btn btn-primary" href="#contact">
            <span>Skontaktuj się ze mną</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { inject, ref } from 'vue'
export default {
  name: 'Header',
  setup() {
    const myEl = ref(null)
    const smoothScroll = inject('smoothScroll')
    const scrollToMyEl = () => {
      smoothScroll({
        scrollTo: myEl.value,
      })
    }
    return { scrollToMyEl }
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/mixins/mixins_app.scss';
.home {
  height: 100vh;
}
.home::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgb(206, 208, 194), rgb(255, 255, 254));
  clip-path: circle(40% at 10% 10%);
  z-index: 1;
}
.home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgb(206, 208, 194), rgb(255, 255, 254));
  clip-path: circle(20% at right 65%);
}
.navbar {
  position: relative;
  z-index: 2;
  .navbar-brand {
    display: inline-block;
    h1 {
      font-size: 2.8rem;
      text-transform: uppercase;
      color: rgb(255, 252, 228);
    }
    small {
      display: block;
      font-size: 1.3rem;
    }
  }
}
.navbar-dark .navbar-nav .nav-link {
  color: #fff;
  cursor: pointer;
  &:hover {
    color: rgb(89, 214, 17);
  }
}
.row {
  padding: 0;
  margin: 0;
}
.container-hero {
  position: relative;
  z-index: 2;
  height: 40rem;
  display: flex;
  justify-content: center;
  .hero-box {
    align-content: center;
    align-self: center;
    h3 {
      @include flex_center;
      text-align: center;
    }
    .btn-box {
      @include flex_center;
      padding-top: 3rem;
      .btn-primary {
        padding: 1.2rem;
        font-size: 1.3rem;
        color: rgb(65, 68, 0);
        background: linear-gradient(rgb(89, 214, 17), rgb(187, 186, 150));
        &:hover {
          background: linear-gradient(rgb(187, 186, 150), rgb(89, 214, 17));
          color: rgb(65, 68, 0);
        }
      }
    }
  }
}
.hero-title {
  display: block;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  font-size: 6rem;
  color: rgb(255, 252, 228);
  font-weight: 700;
  background: linear-gradient(
    to right,
    rgb(89, 214, 17) 10%,
    rgb(194, 211, 7) 50%,
    rgb(187, 186, 150) 60%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: inline-block;
}
@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
@import '../scss/header_media_query';
</style>
