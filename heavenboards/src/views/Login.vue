<script setup lang="ts">
import Brand from '../components/Brand.vue'
import {ref} from "vue";

const isLogin = ref(true);

const toggleLoginSignup = () => {
    isLogin.value = !isLogin.value;
}
</script>

<template>
      <body>
          <div class="content">
              <Brand/>
              <div class="switcher">
                  <button :class="{ active: isLogin }" @click="toggleLoginSignup">log in</button>
                  <button :class="{ active: !isLogin }" @click="toggleLoginSignup">sign up</button>
              </div>
              <div v-if="isLogin" class="auth">
                  <form method="post" action="/login">
                      <input name="username" type="text" placeholder="username" required>
                      <input name="password" type="password" placeholder="password" required>
                      <input type="submit" value="log in">
                  </form>
              </div>
              <div v-else class="registration">
                  <form method="post" action="/signup">
                      <input name="name" type="text" placeholder="name" required>
                      <input name="surname" type="text" placeholder="surname" required>
                      <input name="username" type="text" placeholder="username" required>
                      <input name="password" type="password" placeholder="password" required>
                      <input type="submit" value="sign up">
                  </form>
              </div>
          </div>
      </body>
</template>

<style>
    @import "./styles/LoginStyles.css";
</style>
