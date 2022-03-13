import { mount } from "@vue/test-utils";
import InvoicesHome from "@/views/InvoicesHome.vue";

describe("InvoiceHome unit tests", () => {
  test("checks if InvoiceHome is a vue instance", () => {
    const wrapper = mount(InvoicesHome);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
