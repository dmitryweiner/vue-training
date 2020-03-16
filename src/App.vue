<template>
  <div id="app">
    <ul>
      <li v-for="(item, index) in messages" :key="index">
        {{ item.message }}
      </li>
    </ul>
    <form v-on:submit.prevent="sendMessage">
      <input type="text" v-model="nick"/><br>
      <textarea v-model="message"></textarea>
      <input type="button" value="Send" v-on:click="sendMessage">
    </form>
  </div>
</template>

<script>

const apiUrl = "http://localhost:3000";

export default {
  name: 'App',
  components: {
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
      const http = new XMLHttpRequest();
      http.open("GET", apiUrl, true);
      http.onreadystatechange = () => {
        if (http.readyState === 4 && http.status === 200) {
          this.updateMessages(http.responseText);
        }
      };
      http.send();
    },
    sendMessage: function () {
      const http = new XMLHttpRequest();
      http.open("POST", apiUrl, true);
      http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      http.onreadystatechange = () => {
        if (http.readyState === 4 && http.status === 200) {
          this.updateMessages(http.responseText);
        }
      };
      http.send(JSON.stringify({
        message: this.$data.message,
        nick: this.$data.nick
      }));
      this.$data.message = "";
    },

    updateMessages: function (messagesAsText) {
      const messages = JSON.parse(messagesAsText);
      this.$data.messages = messages;
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
