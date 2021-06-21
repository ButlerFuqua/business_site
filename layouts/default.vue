<template>
  <v-app dark>
    <v-navigation-drawer id="navDrawer" v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(navItem, idx) in navItems"
          :key="idx"
          :to="navItem.to"
          router
          exact
          :aria-label="`${navItem.title}`"
        >
          <v-list-item-action>
            {{ navItem.emoji }}
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="navItem.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app flat class="grey lighten-3">
      <v-btn
        icon
        :aria-label="`Toggle Side nav`"
        @click.stop="drawer = !drawer"
      >
        <menu-icon />
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn :aria-label="`Reload to get updates`" @click="reloadWindow" icon>
        <reload-icon />
      </v-btn>
    </v-app-bar>
    <v-main class="grey lighten-5">
      <v-container style="margin: auto">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MenuIcon from "../components/icons/MenuIcon.vue";
import ReloadIcon from "../components/icons/ReloadIcon";
export default {
  components: {
    ReloadIcon,
    MenuIcon,
  },
  data() {
    return {
      drawer: false,
      fixed: false,
      navItems: [
        {
          emoji: "🏡",
          title: "Welcome",
          to: "/",
        },
      ],
      title: "",
    };
  },
  methods: {
    reloadWindow() {
      window.location.reload();
    },
  },
  async created() {
    this.$nuxt.$on("pageTitleChange", (title) => (this.title = title));
  },
  beforeDestroy() {
    this.$nuxt.$off("pageTitleChange");
  },
};
</script>

<style scoped>
#navDrawer {
  max-height: 100% !important;
}
</style>

