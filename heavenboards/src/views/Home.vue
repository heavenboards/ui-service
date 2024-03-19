<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from "vue";
    import Brand from '../components/Brand.vue'

    //рефы для отображение данных залогиненного пользователя
    const username = ref('');
    const firstName = ref('');
    const lastName = ref('');

    const fetchUserData = () => {
      username.value = localStorage.getItem('username') || '';
      firstName.value = localStorage.getItem('firstName') || '';
      lastName.value = localStorage.getItem('lastName') || '';
    };

    onMounted(() => {
      if (localStorage.getItem('authToken')) {
        fetchUserData();
      }
    });
</script> 
<template>
    <div class="content home">
        <div class="wrapper">
            <Brand/>
            <div>Привет, {{ username }} {{ firstName }} {{ lastName }}</div>
            <div class="container">
                <div class="left-side">
                    <div class="title">projects</div>
                    <div class="projects">
                        <button class="project">PROJECT_NAME</button>
                    </div>
                    <button class="button-new">new</button>
                </div>
                <div class="right-side">
                    <div class="title">boards</div>
                    <div class="boards">
                        <a href="/board">board_name</a>
                    </div>
                    <button class="button-new">new</button>
                </div>
            </div>
        </div>  
    </div>
</template>

<style>
@import "./styles/HomeStyles.css";
</style>
