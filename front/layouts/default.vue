<template>
    <div>
        <header>
            <div>
                <ul>
                    <li >
                        <nuxt-link to="/">메인</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/board/">보드</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/login/">로그인</nuxt-link>
                    </li>
                </ul>
            </div>
        </header>
        <div class="container">
            <nuxt />
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    html {
        margin: 0;
        padding: 0;
    }

    head {
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        padding: 0;
    }

    div {
        margin: 0;
        padding: 0;
    }

    header {
        margin:0;
        padding: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: beige;
        padding-left: 30px;
    }

    header ul {
        margin: 0;
        padding: 0;
    }

    header ul li {
        display: inline-block;
    }

    .container {
        width: 1920px;
        margin: 30px auto;
    }
</style>