import { shallowMount } from "@vue/test-utils";
import EditInvoice from "@/components/invoice/EditInvoice.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(EditInvoice);
});

afterEach(() => {
  wrapper.destroy();
});

describe("EditInvoice", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
