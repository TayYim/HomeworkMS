<template>
    <div>
        <p v-for="log in logs" :key="log.id">
            {{ log }}
        </p>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "InfoBoard",
  computed: {
    ...mapState(["logs"])
  }
};
</script>

<style scoped>
</style>