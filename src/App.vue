<template>
  <div id="app">
    <MessagesList :messages="$store.state.messages"/>
    <MessageForm v-on:send-message="sendMessage"/>
  </div>
</template>

<script>
import MessagesList from "./components/MessagesList";
import MessageForm from "./components/MessageForm";

export default {
  name: 'App',
  components: {
    MessageForm,
    MessagesList
  },
  mounted: function () {
    setInterval(this.receiveMessages, 1000);
  },
  methods: {
    receiveMessages: function () {
      this.$store.dispatch('receiveMessages');
    },
    sendMessage: function (data) {
      this.$store.dispatch('sendMessage', data);
      this.$data.message = "";
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
