<script setup lang="ts">
    import Brand from '../components/Brand.vue'
</script> 
<template>
    <div class="content home">
        <div class="wrapper">
            <Brand/>
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
