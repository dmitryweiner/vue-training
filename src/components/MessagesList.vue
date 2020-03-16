<template>
    <div>
        <ul v-if="length">
            <li v-for="(item, index) in messages" :key="index">
                <strong>{{ item.nick }}:</strong> {{ item.message }}
            </li>
        </ul>
        <span>Total messages: {{length}}</span>
    </div>
</template>

<script>

    export default {
        name: "MessagesList",
        props: [
            "messages"
        ],
        computed: {
            length: function () {
                return this.$props.messages ? this.$props.messages.length : 0;
            }
        }
    }

</script>

<style scoped>

</style>