import Vuex from "vuex"
import {mount, shallowMount, createLocalVue } from "@vue/test-utils"
import MessagesForm from "@/components/MessageForm.vue"
import store, {messages} from "./mock-store"

const localVue = createLocalVue();
localVue.use(Vuex);

describe("MessageForm.vue", () => {
  it("Sends values on button click", async () => {
    const newMessage = {
      message: "new message",
      nick: "new nick"
    };

    const wrapper = shallowMount(MessagesForm, {
      store,
      localVue
    });

    wrapper.find('input[type="text"]').setValue(newMessage.nick);
    wrapper.find('textarea').setValue(newMessage.message);
    wrapper.find('input[type="button"]').trigger('click');

    expect(store.dispatch).toHaveBeenCalledWith("sendMessage" , newMessage);
  })
});
