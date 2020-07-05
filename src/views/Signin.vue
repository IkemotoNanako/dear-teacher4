<template>
<div class="signup">
    <div class="card">
        <p class="title">ログイン</p>
        <div class="form">
            <input placeholder="メールアドレス" type="email" v-model="email" />
            <input placeholder="パスワード" type="password" v-model="password" />
            <button @click="signIn">ログイン</button>
            <p class="login">メンバー登録は<a class="router" @click="$router.push('/signup')">こちら</a>
            </p>
        </div>
    </div>
</div>
</template>
<script>
import firebase from "firebase";
export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        signIn() {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(data => {
                if (data.user.emailVerified) {
                    this.$store.dispatch("changeUserAction", 
    {
                        user: data.user
                        });
                    this.$router.replace("/Account");
                }
            });
        }
    }
};
</script>
