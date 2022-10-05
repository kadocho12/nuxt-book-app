<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <!-- <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item> -->
        <v-list-item
          v-if="isLoggedIn"
          @click="drawer = false"
          to="/auth/logout"
          router
          exact
        >
          <v-list-item-action>
            <v-icon></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-else
          @click="drawer = false"
          to="/auth/login"
          router
          exact
        >
          <v-list-item-action>
            <v-icon></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <!-- <div v-show="isLoggedIn"> -->
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- </div> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      clipped: false,
      items: [
        // {
        //   icon: 'mdi-apps',
        //   title: 'Welcome',
        //   to: '/',
        // },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Inspire',
        //   to: '/inspire',
        // },
        // {
        //   title: 'Logout',
        //   to: '/auth/logout',
        // },
      ],
      drawer: false,
      miniVariant: false,
      title: 'bookApp',
    }
  },
  computed: {
    ...mapGetters({getLoggedIn: 'auth/getLoggedIn'}),
    isLoggedIn() {
      // return this.$store.getters['auth/getLoggedIn']
      return this.getLoggedIn
    }
  }
}
</script>

<style>

</style>