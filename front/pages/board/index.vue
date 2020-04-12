<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>글번호</th>
                    <th>글제목</th>
                    <th>글쓴이</th>
                    <th>작성일</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in lists" :key="list.id">
                    <td><nuxt-link :to="'/board/post/' + list.id">{{ list.id }}</nuxt-link></td>
                    <td>{{ list.name }}</td>
                    <td>{{ list.write }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
export default {
    data() {
        return {
            lists:  [
                { id: 1, name: 'web', write: '민정'  },
                { id: 2, name: 'is', write: '보민' },
                { id: 3, name: 'free', write: '승희' }
            ]
        }
    }
}
</script>


<style>
    
</style>