<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const isAuthenticated = ref(false);
const router = useRouter();

onMounted(() => {
  isAuthenticated.value = !!localStorage.getItem('authToken');
});

const logout = () => {
  localStorage.removeItem('authToken');
  isAuthenticated.value = false; //обновление статуса аутентификации
  router.push('/login');
};
</script>

<template>
  <div class="auth-status" :class="{ authenticated: isAuthenticated }">
    <p v-if="isAuthenticated">Вы в аккаунте</p>
    <p v-else>Требуется вход или регистрация</p>
    <button v-if="isAuthenticated" @click="logout">Выйти из аккаунта</button>
  </div>
</template>

<style>
.auth-status {
  position: fixed;
  right: 20px;
  top: 20px;
  padding: 10px;
  border-radius: 5px;
}

.auth-status.authenticated {
  background-color: #020202;
}

.auth-status p {
  margin: 0;
  font-size: 14px;
}

.auth-status button {
  margin-top: 10px;
  cursor: pointer;
}
</style>