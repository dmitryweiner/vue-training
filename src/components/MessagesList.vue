<template>
    <div>
        <ul v-if="messagesCount">
            <li v-for="(item, index) in messages" :key="index">
                <strong>{{ item.nick }}:</strong> {{ item.message }}
            </li>
        </ul>
        <span>Total messages: {{messagesCount}}</span>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "MessagesList",
        props: [
            "messages"
        ],
        computed: {
            ...mapGetters(["messagesCount"])
        }
    }

</script>

<style scoped>

</style>