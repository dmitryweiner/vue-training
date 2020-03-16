<template>
    <div>
        <ul>
            <li v-for="(item, index) in messages" :key="index">
                {{ item.message }}
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "MessagesList",
        props: [
            "messages"
        ]
    }

</script>

<style scoped>

</style>