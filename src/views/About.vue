<template>
  <div class="about">
    <ContentAbout />
  </div>
</template>

<script>
// @ is an alias to /src
import ContentAbout from '@/layouts/content-about.vue'

export default {
  name: 'About',
  components: { ContentAbout },
}
</script>
