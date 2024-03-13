<script setup lang="ts">
import Brand from '../components/Brand.vue'
import { ref } from "vue";
import { useRouter } from 'vue-router';
import apiClient from '@/api/api';

const toggleLoginSignup = () => {
    isLogin.value = !isLogin.value;
};

const username = ref('');
const password = ref('');
const firstName = ref('');
const lastName = ref('');
const isLogin = ref(true);

const router = useRouter();

const onSuccessfulAuth = () => {
    router.push({ name: 'Home' });
};

const handleSubmit = async () => {
    let endpoint = isLogin.value ? '/authenticate' : '/register';
    let payload = isLogin.value ? {username: username.value, password: password.value} :
                                  {username: username.value, password: password.value, firstName: firstName.value, lastName: lastName.value};
  try {
    const response = await apiClient.post(endpoint, payload);
    localStorage.setItem('authToken', response.data.token);
    console.log(response);
    onSuccessfulAuth();
  } catch (error) {
    console.log(error);
  }
};

</script>

<template>
      <body>
          <div class="content">
              <Brand/>
              <div class="switcher">
                  <button :class="{ active: isLogin }" @click="toggleLoginSignup">Log in</button>
                  <button :class="{ active: !isLogin }" @click="toggleLoginSignup">Sign up</button>
              </div>
              <div v-if="isLogin" class="auth">
                  <form @submit.prevent="handleSubmit">
                      <input name="username" type="text" placeholder="Username" required>
                      <input name="password" type="password" placeholder="Password" required>
                      <input type="submit" value="Log in">
                  </form>
              </div>
              <div v-else class="registration">
                  <form @submit.prevent="handleSubmit">
                      <input name="username" type="text" placeholder="Username" required>
                      <input name="password" type="password" placeholder="Password" required>
                      <input name="firstName" type="text" placeholder="First Name" required>
                      <input name="lastName" type="text" placeholder="Last Name" required>
                      <input type="submit" value="Sign up">
                  </form>
              </div>
          </div>
      </body>
</template>

<style>
    @import "./styles/LoginStyles.css";
</style>
