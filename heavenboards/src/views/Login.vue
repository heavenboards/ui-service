<script setup lang="ts">
import Brand from '../components/Brand.vue'
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';
import apiClient from '@/api/api';

const username = ref('');
const password = ref('');
const firstName = ref('');
const lastName = ref('');
const isLogin = ref(true);

const router = useRouter();

onMounted(() => {
  const authToken = localStorage.getItem("authToken");
  if (authToken) {
    router.push({ name: 'Home' });
  }
});

const toggleLoginSignup = () => {
  isLogin.value = !isLogin.value;
};

const onSuccessfulAuth = (token: string) => {
    console.log("Токен: ", token);
    localStorage.setItem('authToken', token);
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    //проверка redirect в query (если пытались до auth зайти) то перенаправляет
    const redirect = router.currentRoute.value.query.redirect;
    if (typeof redirect === 'string' && redirect) {
        router.push(redirect);
    } else {
        router.push({ name: 'Home' });
    }
};

const handleSubmit = async () => {
    let endpoint = isLogin.value ? 'auth/authenticate' : 'auth/register';
    let payload = isLogin.value ? {username: username.value, password: password.value} :
                                  {username: username.value, password: password.value, firstName: firstName.value, lastName: lastName.value};

    console.log("Endpoint: ", endpoint)
    console.log("Payload: ", payload)
    try {
        const response = await apiClient.post(endpoint, payload);

        console.log('Response: ', response);

        const { token } = response.data;
        if (token) {
          onSuccessfulAuth(token);
          await fetchUserData(username.value);
        } else {
          console.error('Token was not received!');
        }
    } catch (error) {
        console.error('Error: ', error);
    }
};

const fetchUserData = async (username: string) => {
  try {
    const response = await apiClient.get(`user/${username}`);
    const userData = response.data;
    localStorage.setItem('username', userData.username)
    localStorage.setItem('firstName', userData.firstName);
    localStorage.setItem('lastName', userData.lastName);

    firstName.value = userData.firstName;
    lastName.value = userData.lastName;
  } catch (error) {
    console.log('Ошибка при получении данных пользователя: ', error);
  }
}
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
                      <input v-model="username" type="text" placeholder="Username" required>
                      <input v-model="password" type="password" placeholder="Password" required>
                      <input type="submit" value="Log in">
                  </form>
              </div>
              <div v-else class="registration">
                  <form @submit.prevent="handleSubmit">
                      <input v-model="username" type="text" placeholder="Username" required>
                      <input v-model="password" type="password" placeholder="Password" required>
                      <input v-model="firstName" type="text" placeholder="First Name" required>
                      <input v-model="lastName" type="text" placeholder="Last Name" required>
                      <input type="submit" value="Sign up">
                  </form>
              </div>
          </div>
      </body>
</template>

<style>
    @import "./styles/LoginStyles.css";
</style>
