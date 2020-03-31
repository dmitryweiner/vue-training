<template>
  <div id="app">
    <MessagesList :messages="$store.state.messages"/>
    <MessageForm/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MessagesList from "./components/MessagesList.vue";
import MessageForm from "./components/MessageForm.vue";

@Component({
  components: {
    MessageForm,
    MessagesList
  },
})
export default class App extends Vue {
  mounted() {
    setInterval(() => this.$store.dispatch("receiveMessages"), 1000);
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
