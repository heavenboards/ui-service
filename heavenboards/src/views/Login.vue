<script setup lang="ts">
    import Brand from '../components/Brand.vue'
    // import InputField from '../components/InputField.vue'

    // var isLogin = true;
    // function on_click_switcher(window_id: number)
    // {
    //     switch (window_id){
    //         case 0:
    //             isLogin = true;
    //             break;
    //         default:
    //             isLogin = false;
    //             break;
    //     }
    // }
</script>
<script lang="ts">
    export default {
        data(){
            return {
                isLogin: true
            }
        },
        methods: {
            on_click_switcher(window_id: number)
            {
                console.log(window_id);
                switch (window_id){
                    case 0:
                        this.isLogin = true;
                        document.getElementById("switcher-login")?.classList.add('active');
                        document.getElementById("switcher-signup")?.classList.remove('active');
                        break;
                    default:
                        document.getElementById("switcher-signup")?.classList.add('active');
                        document.getElementById("switcher-login")?.classList.remove('active');
                        this.isLogin = false;
                        break;
                }
            }
        }
    }
</script>
<template>
    <body>
        <div class="content">
            <Brand/>
            <div class="switcher">
                <button v-on:click="on_click_switcher(0)" id="switcher-login" class="active">log in</button>
                <button v-on:click="on_click_switcher(1)" id="switcher-signup">sign up</button>
            </div>
            <div v-if="isLogin" class="auth">
                <form action="" method="post">
                    <input name="username" type="text" placeholder="username" >
                    <input name="password" type="password" placeholder="password" >
                    <input id="login" type="button" value="log in">
                </form>
            </div>
            <div v-else class="registration">
                <form action="" method="post">
                    <input name="name" type="text" placeholder="name" >
                    <input name="surname" type="text" placeholder="surname" >
                    <input name="username" type="text" placeholder="username" >
                    <input name="password" type="password" placeholder="password" >
                    <input id="signup" type="button" value="sign up">
                </form>
            </div>
        </div>
    </body>
</template>

<style>
@import "./styles/LoginStyles.css";
</style>
