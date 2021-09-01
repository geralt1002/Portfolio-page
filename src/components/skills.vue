<template>
  <div>
    <div class="box-item">
      <img :src="image" class="card-img-top" alt="..." />
      <div class="card-body mt-4">
        <p class="card-text">{{ title }}</p>
      </div>
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
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/mixins/mixins_app.scss';

.technologies-box {
  @include flex_center;
  text-align: center;
  flex-direction: column;
  max-width: 100%;
  .box-item {
    width: 6rem;
    height: 100%;
    margin-bottom: 1rem;
    @include flex_center;
    text-align: center;
    flex-direction: column;
    .card-img-top {
      max-width: 5rem;
      transform: translateY(0);
      transition: all 0.3s ease 0s;
    }
    .card-text {
      transform: translateY(0);
      transition: all 0.3s ease 0s;
    }
    &:hover {
      .card-img-top {
        transform: translateY(1rem);
      }
      .card-text {
        transform: translateY(-1rem);
      }
    }
  }
}
</style>
