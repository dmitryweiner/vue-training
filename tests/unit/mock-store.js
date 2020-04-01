import Vuex from "vuex";
import {createLocalVue} from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

export const messages = [
    {message: "Hello!", nick: "CyberNomad"},
    {message: "Hi", nick: "SuperHacker"},
];

const store = new Vuex.Store({
    state: {
        messages
    },
    getters: {
        messagesCount: (state) => state.messages.length
    },
});
store.dispatch = jest.fn();

export default store;
