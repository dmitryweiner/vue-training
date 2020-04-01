import Vuex from "vuex";
import axios from "axios";
import {createLocalVue} from "@vue/test-utils";
import {storeConfig} from "../../src/store";
import {messages} from "./mock-store";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store(storeConfig);

jest.mock("axios");
axios.get.mockImplementation(() => Promise.resolve({data: [...messages]}));
axios.post.mockImplementation(() => Promise.resolve({data: [...messages]}));

describe("store.ts", () => {
    it("Has empty values at the beginning", () => {
        expect(store.state.messages.length).toBe(0);
    });

    it("Fetching messages and stores them to state", async () => {
        await store.dispatch("receiveMessages");
        expect(store.state.messages.length).toBe(messages.length);
        expect(store.state.messages).toEqual(messages);
    });

    it("Posts message and updates store", async () => {
        const newMessage = {
            message: "new message",
            nick: "new nick"
        };
        await store.dispatch("sendMessage", newMessage);
        expect(store.state.messages.length).toBe(messages.length + 1);
        expect(store.state.messages).toEqual([...messages, newMessage]);
    });

});