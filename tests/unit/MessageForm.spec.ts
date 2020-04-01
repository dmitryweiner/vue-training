import {mount, shallowMount} from "@vue/test-utils"
import MessagesForm from "@/components/MessageForm.vue"

describe("MessageForm.vue", () => {
  it("Sends values on button click", async () => {
    const newMessage = {
      message: "new message",
      nick: "new nick"
    };

    const wrapper = shallowMount(MessagesForm);

    wrapper.find('input[type="text"]').setValue(newMessage.nick);
    wrapper.find('textarea').setValue(newMessage.message);
    wrapper.find('input[type="button"]').trigger('click');

    expect(wrapper.emitted().sendMessage).toBeTruthy();
    expect(wrapper.emitted().sendMessage.length).toBe(1);
    expect(wrapper.emitted().sendMessage[0]).toEqual([newMessage]);
  })
});
