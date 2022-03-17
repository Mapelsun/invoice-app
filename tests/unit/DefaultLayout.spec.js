import { shallowMount } from "@vue/test-utils";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(DefaultLayout);
});

afterEach(() => {
  wrapper.destroy();
});

describe("DefaultLayout", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
