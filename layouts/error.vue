<template>
  <v-container>
    <div class="text-center mb-3">
      <h1 v-if="error.statusCode === 404">
        🤷 Opps! That page cannot be found
      </h1>
      <h1 v-else>👷‍♀️ Sorry! There was an error.</h1>
    </div>
    <v-alert class="errorBackground" border="top" color="red" dark>
      <p v-if="error.statusCode === 404">
        The page you're looking for has been moved, or doesn't exist.
      </p>
      <p v-else>{{ otherError }}</p>
    </v-alert>
    <v-divider class="my-4"></v-divider>
    <div class="text-center my-4">
      <h2>Recent updates</h2>
    </div>
    <v-divider class="my-4"></v-divider>
  </v-container>
</template>

<script>
export default {
  components: {},
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "Page Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
  created() {
    this.$nuxt.$emit(
      "pageTitleChange",
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    );
  },
};
</script>

<style scoped>
h1 {
  font-size: 3rem !important;
}
</style>
