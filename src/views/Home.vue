<template>
  <div class="home">
    <ContentHeader />
  </div>
</template>

<script>
// @ is an alias to /src
import ContentHeader from '@/layouts/content-header.vue'

export default {
  name: 'Home',
  components: { ContentHeader },
}
</script>
