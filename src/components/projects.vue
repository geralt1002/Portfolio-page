<template>
  <div>
    <div class="box-item--hover">
      <div class="item-heading mt-3">
        <h3 class="heading-title--hover">{{ title }}</h3>
        <p class="heading-desc--hover">
          {{ description }}
        </p>
      </div>
      <div class="link-to-prewiev">
        <a
          v-if="live"
          :href="live"
          class="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="social-icon-link" src="../assets/img/github.svg" alt="" />
        </a>
        <a
          v-if="github"
          :href="github"
          class="link-live"
          target="_blank"
          rel="noopener noreferrer"
        >
          / Live
        </a>
      </div>
      <p class="item-tech--hover">{{ technology }}</p>
    </div>
    <div class="card">
      <img :src="image" class="card-img-top" alt="..." />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    live: {
      type: String,
      required: true,
    },
    technology: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/mixins/mixins_app.scss';

.portfolio-box {
  @include flex_center;
  .box-item {
    @include flex_center;
    padding: 0;
    margin: 0;
    position: relative;
    cursor: pointer;
    &:hover {
      .box-item--hover {
        z-index: 1;
        opacity: 1;
        @include flex_center;
        flex-direction: column;
        cursor: pointer;
        -ms-transform: scale(1);
        -webkit-transform: scale(1);
        transform: scale(1);
        .item-heading {
          height: 100%;
          @include flex_center;
          flex-direction: column;
          .heading-title--hover {
            font-size: 2rem;
          }
          .heading-desc--hover {
            font-size: 1.4rem;
          }
        }
        .link-to-prewiev {
          height: 100%;
          @include flex_center;
          .social-link {
            cursor: pointer;
            .social-icon-link {
              width: 2.2rem;
              @include flex_center;
            }
          }
          .link-live {
            @include flex_center;
            text-decoration: none;
            font-size: 2rem;
            background: -webkit-linear-gradient(#59d611 10%, #c2d307 50%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        .item-tech--hover {
          height: 100%;
          text-align: center;
          font-size: 1.4rem;
          @include flex_center;
          align-items: flex-end;
        }
      }
    }
    .box-item--hover {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      background: rgba(0, 0, 0, 0.7);
      position: absolute;
      z-index: 2;
      @include flex_center;
      flex-direction: column;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      -ms-transform: scale(0.1);
      -webkit-transform: scale(0.1);
      transform: scale(0.1);
      .item-heading {
        height: 100%;
        @include flex_center;
        flex-direction: column;
        .heading-title--hover {
          height: 100%;
          font-size: 2rem;
          @include flex_center;
          align-items: center;
          text-align: center;
        }
        .heading-desc--hover {
          margin: 0 2rem;
          font-size: 1.4rem;
          text-align: center;
        }
      }
      .link-to-prewiev {
        height: 100%;
        @include flex_center;
        .social-link {
          cursor: pointer;
          .social-icon-link {
            width: 2.2rem;
            @include flex_center;
          }
        }
        .link-live {
          text-decoration: none;
          font-size: 2rem;
          background: -webkit-linear-gradient(#59d611 10%, #c2d307 50%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .item-tech--hover {
        height: 100%;
        font-size: 1.4rem;
        @include flex_center;
        align-items: flex-end;
      }
    }
    .card {
      margin: 0.5rem;
    }
  }
}
@import '../scss/portfolio_media_query.scss';
</style>
