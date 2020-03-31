import { shallowMount } from "@vue/test-utils"
import Message from "@/components/Message.vue"

describe("Message.vue", () => {
  it("renders props.msg when passed", () => {
    const message = {message: "new message", nick: "CyberNomad"};
    const wrapper = shallowMount(Message, {
      propsData: { message }
    });
    expect(wrapper.text()).toMatch(`${message.nick}: ${message.message}`);
  })
});
