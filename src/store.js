import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

const apiUrl = "http://localhost:3000"; // TODO: move it to env

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        messages: []
    },
    mutations: {
        setMessages: function(state, messages) {
            state.messages = messages;
        },
        addMessage: function(state, message) {
            state.messages.push(message);
        }
    },
    actions: {
        receiveMessages: function ({commit}) {
            axios.get(apiUrl).then((response) => {
                commit("setMessages", response.data);
            });
        },
        sendMessage: function ({commit}, messageObj) {
            axios.post(apiUrl, JSON.stringify({
                message: messageObj.message,
                nick: messageObj.nick
            })).then(() => {
                commit("addMessage", messageObj);
            });
        },
    }
})