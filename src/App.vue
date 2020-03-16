<template>
  <div id="app">
    <MessagesList :messages="messages"/>
    <MessageForm v-on:send-message="sendMessage"/>
  </div>
</template>

<script>
import axios from "axios";
import MessagesList from "./components/MessagesList";
import MessageForm from "./components/MessageForm";

const apiUrl = "http://localhost:3000";

export default {
  name: 'App',
  components: {
    MessageForm,
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
    sendMessage: function (data) {
      axios.post(apiUrl, JSON.stringify(data))
              .then((response) => this.$data.messages = response.data);
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
