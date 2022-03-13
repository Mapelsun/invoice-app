import { mount } from "@vue/test-utils";
import InvoiceHome from "@/views/InvoiceHome.vue";

describe("InvoiceHome unit tests", () => {
  test("checks if InvoiceHome is a vue instance", () => {
    const wrapper = mount(InvoiceHome);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
