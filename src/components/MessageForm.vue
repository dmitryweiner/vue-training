<template>
    <form v-on:submit.prevent="sendMessage">
        <input type="text" v-model="nick"/><br>
        <textarea v-model="message"></textarea>
        <input type="button" value="Send" v-on:click="sendMessage">
    </form>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component
    export default class MessageForm extends Vue {
            message = "";
            nick = "";

            sendMessage() {
                this.$emit('sendMessage', {
                    nick: this.$data.nick,
                    message: this.$data.message
                });
                /*this.$store.dispatch("sendMessage", {
                    nick: this.$data.nick,
                    message: this.$data.message
                });*/
                this.$data.message = "";
            }
    }
</script>

<style scoped>

</style>