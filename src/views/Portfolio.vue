<template>
  <div class="portfolio">
    <ContentPortfolio />
  </div>
</template>

<script>
// @ is an alias to /src
import ContentPortfolio from '@/layouts/content-portfolio.vue'

export default {
  name: 'Home',
  components: { ContentPortfolio },
}
</script>
