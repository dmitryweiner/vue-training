import Vuex from "vuex"
import { mount, createLocalVue } from "@vue/test-utils"
import MessagesList from "@/components/MessagesList.vue"
import store, {messages} from "./mock-store"

const localVue = createLocalVue();
localVue.use(Vuex);

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
