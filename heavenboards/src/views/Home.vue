<script></script> 
<template>
    <div class="content">
        <div class="container">
            <div class="left-side">
                <div class="title">organizations</div>
                <div class="organizations">
                    <button>ORGANIZATION_NAME</button>
                </div>
                <button>ADD ORGANIZATION</button>
            </div>
            <div class="right-side">
                <div class="projects">organizations</div>
                <div class="projects"><a>PROJECT</a></div>
                <button>ADD PROJECT</button>
            </div>
        </div>
    </div>
</template>
<style>
    .container{
        background-color: var(--hb-c-lightgray);
        padding: 25px 75px;
        width: 1146px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .left-side, .right-side{
        padding: 25px 10px;
    }
    .left-side{
        width: 40%;
        border-color: var(--hb-c-green);
        border-width: 0 3px 0 0;
        border-style: solid;
    }
    .left-side button{
        width: 100%;
    }
    .right-side{
        width: 60%
    }
</style>