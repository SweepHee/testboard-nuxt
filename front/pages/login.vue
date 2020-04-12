<template>
    <div>
        <div v-if="!me">
            <form v-model="validation" @submit.prevent="onSubmitForm">
                <input type="text" v-model="id" placeholder="아이디" />
                <input type="text" v-model="password" placeholder="비밀번호" />
                <input type="text" v-model="name" placeholder="성명" />
                <button type="submit">가입</button>
            </form>
        </div>
        <div v-else>
            <h1>로그인되었습니다</h1>
            <p>아이디 : {{ me.id }}</p>
            <p>비밀번호 : {{ me.password }}</p>
            <p>이름 : {{ me.name }}</p>
            <button type="button" @click.prevent="onLogout">로그아웃</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            validation: false,
            id: "",
            password: "",
            name: "",
        }
    },
    methods: {
        onSubmitForm() {
            if(this.id == "") {
                alert("아이디입력");
                return false;
            }

            if(this.password == "") {
                alert("비밀번호입력");
                return false;
            }

            if(this.name == "") {
                alert("이름입력");
                return false;
            }

            this.$store.dispatch("users/signUp", {
                id: this.id,
                password: this.password,
                name: this.name
            });
        },
        onLogout() {
            this.$store.dispatch("users/logOut")
                .then(() => {
                    this.$router.push({
                        path: '/',
                    })
                })
                .catch((err) => {
                    alert('로그아웃 실패'+err);
                });

        }
    },
    computed: {
        me() {
            return this.$store.state.users.me;
        }
    }
}
</script>

<style>
    
</style>