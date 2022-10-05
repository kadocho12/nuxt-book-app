<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created() {
    // this.$store.dispatch('auth/logout')
    this.authLogout()
  },
  methods: {
    ...mapActions({authLogout: 'auth/logout'}),
  }
}
</script>

<style>

</style>