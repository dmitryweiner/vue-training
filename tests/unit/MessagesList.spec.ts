import Vuex from "vuex"
import { mount, createLocalVue } from "@vue/test-utils"
import MessagesList from "@/components/MessagesList.vue"

const messages = [
  {message: "Hello!", nick: "CyberNomad"},
  {message: "Hi", nick: "SuperHacker"},
];

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    messages
  },
  getters: {
    messagesCount: (state) => state.messages.length
  }
});

describe("MessageList.vue", () => {
  it("renders messages array", () => {
    const wrapper = mount(MessagesList, {
      store,
      localVue
    });

    const renderedMessages = wrapper.findAll("li");

    expect(renderedMessages.length).toBe(messages.length);

    expect(renderedMessages.at(0).text()).toMatch(`${messages[0].nick}: ${messages[0].message}`);
  })
});
