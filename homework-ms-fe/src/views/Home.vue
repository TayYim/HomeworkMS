<template>
  <div class="home">
    <management />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Management from '@/components/Management.vue'

export default {
  name: 'home',
  components: {
    Management
  }
}
</script>
