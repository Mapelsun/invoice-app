import { shallowMount } from "@vue/test-utils";
import InvoiceHeader from "@/components/invoice/InvoiceHeader.vue";

let wrapper;
const invoiceLengthValue = 1;

beforeEach(() => {
  wrapper = shallowMount(InvoiceHeader, {
    propsData: {
      invoiceLength: invoiceLengthValue,
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("InvoiceHeader", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("contains a header element", () => {
    expect(wrapper.find("header").exists()).toBe(true);
  });

  test("contains a prop", () => {
    expect(wrapper.props().invoiceLength).toBe(invoiceLengthValue);
  });
});
