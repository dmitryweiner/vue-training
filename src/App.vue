<template>
  <div id="app">
    <MessagesList :messages="messages"/>
    <form v-on:submit.prevent="sendMessage">
      <input type="text" v-model="nick"/><br>
      <textarea v-model="message"></textarea>
      <input type="button" value="Send" v-on:click="sendMessage">
    </form>
  </div>
</template>

<script>
import axios from "axios";
import MessagesList from "./components/MessagesList";

const apiUrl = "http://localhost:3000";

export default {
  name: 'App',
  components: {
    MessagesList
  },
  data: () => ({
    messages: [],
    message: "",
    nick: ""
  }),
  mounted: function () {
    setInterval(this.receiveMessages, 1000);
  },
  methods: {
    receiveMessages: function () {
      axios.get(apiUrl).then((response) => this.$data.messages = response.data);
    },
    sendMessage: function () {
      axios.post(apiUrl, {
        message: this.$data.message,
        nick: this.$data.nick
      }).then((response) => this.$data.messages = response.data);
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
