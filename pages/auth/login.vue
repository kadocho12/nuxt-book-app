<template>
  <div>ログイン
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="email"
          label="メールアドレス"
        />
        <v-text-field
          v-model="password"
          label="パスワード"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-btn
          color="primary"
          @click="login"
        >ログイン</v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn
          text
          to="./register"
        >ユーザー登録</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({authLogin: 'auth/login'}),
    login() {
      // this.$store.dispatch('auth/login', {
      //   email: this.email,
      //   password: this.password
      // })
      this.authLogin({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style>

</style>