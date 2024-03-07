<script setup lang="ts">
    import Brand from '../components/Brand.vue'
</script>
<template>
    <div class="menu">
        <div class="menu-content">
            <Brand/>
            <button>invite</button>
            <button>settings</button>
        </div>
    </div>
    <div class="board-name">board_name</div>
    <div class="board">
        <div class="board-content">
            <div class="column-wrapper">
                <div class="column">
                    <div class="title">column_name</div>
                    <hr>
                    <div class="tasks">
                        <button class="task">task_name</button>
                    </div>
                    <button class="add">add</button>
                </div>
            </div>
            <div class="column-wrapper">
                <div class="column">
                    <div class="title">column_name</div>
                    <hr>
                    <div class="tasks"></div>
                    <button class="add">add</button>
                </div>
                </div>
            <button class="column-add">add</button>
        </div>
    </div>
</template>

<style>
@import "./styles/BoardStyles.css";
</style>
