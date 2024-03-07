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
    .menu{
        height: 100px;
        border-style: solid;
        border-width: 0 0 3px 0;
        border-color: var(--hb-c-green);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .menu-content{
        padding: 20px 50px;
        display: flex;
    }

    .menu-content button{
        margin: 0 0 0 50px;
        padding: 15px 40px;   
        text-transform: uppercase; 
    }
    .board-name{
        padding: 20px 30px;
        font-size: 2.2em;
        font-weight: bolder;
    }
    .board-content{
        padding: 20px 30px;
        display: flex;
    }
    
    .board-content .column{
        width: 300px;
        padding: 30px 20px;
        border-radius: 10px;
        border-style: solid;
        border-width: 0;
        background-color: var(--hb-c-gray);
    }

    .column-wrapper{
        margin: 0 0 0 50px;
    }

    .column-wrapper:first-of-type{
        margin: 0 !important;
    }

    .column-add{
        width: 300px;
        height: 30px;
        border-radius: 10px;
        border-style: solid;
        border-width: 0;
        background-color: var(--hb-c-gray);
        border-style: solid;
        text-transform: uppercase;
        color: var(--hb-c-green);
        border-color: var(--hb-c-green);
        border-radius: 3px;
        border-width: 1px;
        transition: 0.2s;
        margin: 0 0 0 50px;
    }

    .board-content .title{
        font-size: 1.1em;
        font-weight: bold;
    }

    .column button{
        width: 100%;
        height: 30px;
        text-transform: uppercase;
        background-color: var(--hb-c-transparent);
        border-style: solid;
        color: var(--hb-c-green);
        border-color: var(--hb-c-green);
        border-radius: 3px;
        border-width: 1px;
        transition: 0.2s;
    }

    .tasks button{
        border-radius: 0;
        border-width: 0 0 0 3px;
        color: var(--hb-c-white);
        margin: 0 0 10px 0;
        text-transform: none;
    }

    .board-content button:hover{
        background-color: var(--hb-c-green);
        color: var(--hb-c-gray);
    }

    .board-content hr{
        border-color: var(--hb-c-green);
        margin: 20px 0;
    }
</style>