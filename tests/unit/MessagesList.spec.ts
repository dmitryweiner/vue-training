import { mount } from "@vue/test-utils"
import MessagesList from "@/components/MessagesList.vue"

const messages = [
  {message: "Hello!", nick: "CyberNomad"},
  {message: "Hi", nick: "SuperHacker"},
];

describe("MessageList.vue", () => {
  it("renders messages array", () => {
    const wrapper = mount(MessagesList, {
      propsData: { messages }
    });

    const renderedMessages = wrapper.findAll("li");

    expect(renderedMessages.length).toBe(messages.length);

    expect(renderedMessages.at(0).text()).toMatch(`${messages[0].nick}: ${messages[0].message}`);
  })
});
