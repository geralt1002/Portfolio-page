<template>
  <div id="nav" class="app">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <h1>
          <a class="navbar-brand" href="#"
            >Krzysztof Umiński <small>Front-end developer</small></a
          >
        </h1>
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
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
              <router-link class="nav-link" aria-current="page" to="/"
                >Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/about"
                >O mnie</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/technology"
                >Technologie</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/portfolio"
                >Portfolio</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/contact"
                >Kontakt</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style lang="scss">
html body {
  background-color: rgb(0, 14, 61);
  color: #fff;
}
// * {
//   //   color: #fff;
// }
.navbar-brand {
  display: inline-block;
  color: #fff;
}
.navbar-brand small {
  display: block;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;
// }

// #nav a {
//   font-weight: bold;
//   color: #2c3e50;
// }

// #nav a.router-link-exact-active {
//   color: #42b983;
// }
</style>
