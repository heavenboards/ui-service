<script setup lang="ts">
    import Brand from '../components/Brand.vue'
    // import InputField from '../components/InputField.vue'
</script>
<template>
    <body>
        <div class="content">
            <Brand/>
            <form action="" method="post">
                <!-- <InputField value="" title="Login" inputId="login"/>
                <InputField value="" title="Password" inputId="password"/> -->
                <input type="text">
                <input type="password">
                <input id="sigin" type="button" value="SIGN IN">
            </form>
        </div>
    </body>
</template> 
<style>
    .content{
        width: 100%;
        margin: 20% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form{
        display: flex;
        flex-direction: column;
    }

    input {
        width: 240px;
        height: 35px;
        margin: 10px 0;
        font-size: 1.1em;
        border-radius: 5px;
        border-style: none;
        padding: 5px 10px;
        outline-color: var(--hb-c-green);
    }

    input:focus {
        border-color: var(--hb-c-green);
    }

    #sigin{
        height: 50px;
        color: white;
        background-color: var(--hb-c-green);
        border-radius: 5px;
        border-style: none;
        font-size: 1.2em;
    }
</style>