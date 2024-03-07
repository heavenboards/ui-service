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
    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .home .title{
        text-transform: uppercase;
        font-size: 1.3em;
        margin: 0 0 20px 0;
    }
    .container{
        background-color: var(--hb-c-gray);
        padding: 25px 75px;
        width: 1146px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .button-new{
        color: var(--hb-c-green);
        background-color: var(--hb-c-transparent);
        border-color: var(--hb-c-green);
        text-transform: uppercase;
        border-style: solid;
        padding: 10px 20px;
        width: 100%;
        margin: 50px 0 0 0;
        transition: 0.2s;
    }
    .button-new:hover{
        background-color: var(--hb-c-green);
        border-color: var(--hb-c-gray);
        color: var(--hb-c-gray);
    }
    .left-side{
        width: 40%;
        border-color: var(--hb-c-green);
        border-width: 0 3px 0 0;
        border-style: solid;
        padding: 25px 30px 25px 0;
    }

    .project{
        width: 100%;
        height: 30px;
        text-align: left;
        padding: 5px 20px;
        color: var(--hb-c-white);
        background-color: var(--hb-c-transparent);
        border-style: solid;
        border-width: 0 0 0 2px;
        border-color: var(--hb-c-green);
        /* border-radius: 5px; */
        margin: 0 0 10px 0;
        transition: 0.3s;
    }

    .project:hover{
        color:var(--hb-c-green)
    }

    .right-side{
        width: 60%;
        padding: 25px 0 25px 30px;
    }
</style>