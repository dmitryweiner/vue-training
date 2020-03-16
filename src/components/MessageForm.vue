<template>
    <form v-on:submit.prevent="sendMessage">
        <input type="text" v-model="nick"/><br>
        <textarea v-model="message"></textarea>
        <input type="button" value="Send" v-on:click="sendMessage">
    </form>
</template>

<script>
    export default {
        name: "MessageForm",
        data: () => ({
            message: "",
            nick: ""
        }),
        methods: {
            sendMessage: function () {
                this.$store.dispatch("sendMessage", {
                    nick: this.$data.nick,
                    message: this.$data.message
                });
                this.$data.message = "";
            }
        }
    }
</script>

<style scoped>

</style>