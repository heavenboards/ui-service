<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const isAuthenticated = ref(false);
const username = ref('');
const firstName = ref('');
const lastName = ref('');
const router = useRouter();

onMounted(() => {
  const authToken = localStorage.getItem("authToken");
  if (authToken) {
    isAuthenticated.value = true;
    username.value = localStorage.getItem("username") || 'Пользователь';
    firstName.value = localStorage.getItem("firstName") || 'Имя';
    lastName.value = localStorage.getItem("lastName") || 'Фамилия';
  }
});

const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('username');
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
  isAuthenticated.value = false; //обновление статуса аутентификации
  router.push('/login');
};
</script>

<template>
  <div class="auth-status" :class="{ authenticated: isAuthenticated }">
    <div v-if="isAuthenticated" class="user-info">
      <span>Вы в аккаунте! Привет, {{ username }} {{ firstName }} {{ lastName }}</span>
      <button @click="logout">Выйти</button>
    </div>
    <p v-else>Требуется вход или регистрация</p>
  </div>
</template>

<style>
.auth-status {
  position: fixed;
  right: 20px;
  top: 20px;
  background-color: #000000;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(52, 49, 49, 0.1);
}

.auth-status.authenticated {
  background-color: #020202;
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.auth-status p {
  margin: 0;
  font-size: 14px;
}

.auth-status button {
  margin-left: 10px; /* Кнопка отделяется от текста */
  padding: 5px 10px; /* Небольшое увеличение паддинга для красоты */
  background-color: #ff4747; /* Яркий цвет для кнопки "Выйти" */
  color: white; /* Цвет текста в кнопке */
  border: none; /* Убрать стандартную рамку кнопки */
  border-radius: 5px; /* Скругление углов для кнопки */
  cursor: pointer;
}

.auth-status button:hover {
  background-color: #ff2121; /* Цвет при наведении для немного интерактивности */
}
</style>
