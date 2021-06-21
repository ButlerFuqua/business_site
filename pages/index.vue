<template>
  <v-container>
    <h1>Nuxt Vuetify PWA Optimized</h1>
  </v-container>
</template>

<script>
import generateHeadTags from "../lib/generateMeta";
export default {
  head: generateHeadTags("pageTitle", "description", "thumbnail", null, true),
  components: {},
  data() {
    return {
      pageTitle: "Nuxt Vuetify PWA Optimized",
    };
  },
  async created() {
    this.$nuxt.$emit("pageTitleChange", this.pageTitle);
  },
};
</script>

