<template>
    <div>
        <span> {{ id }} </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        }
    }
}
</script>

<style>
    
</style>