import { shallowMount } from "@vue/test-utils";
import EmptyInvoice from "@/components/invoice/EmptyInvoice.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(EmptyInvoice);
});

afterEach(() => {
  wrapper.destroy();
});

describe("EmptyInvoice", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
