import { shallowMount } from "@vue/test-utils";
import CreateInvoice from "@/components/invoice/CreateInvoice.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(CreateInvoice);
});

afterEach(() => {
  wrapper.destroy();
});

describe("CreateInvoice", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
