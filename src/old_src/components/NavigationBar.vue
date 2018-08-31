<template>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/cart">Cart</router-link></li>
    </ul>
</template>
<script>
export default {
    name: 'NavigationBar'
}
</script>
<style scoped>
    ul {
        display: flex;
    }

    ul li {
        flex: 1;
    }
</style>

