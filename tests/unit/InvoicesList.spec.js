import { shallowMount } from "@vue/test-utils";
import InvoicesList from "@/components/invoice/InvoicesList.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(InvoicesList);
});

afterEach(() => {
  wrapper.destroy();
});

describe("InvoicesList", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
