import { shallowMount } from "@vue/test-utils";
import HomeLayout from "@/layouts/HomeLayout.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(HomeLayout);
});

afterEach(() => {
  wrapper.destroy();
});

describe("HomeLayout", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("name to match homeLayout", () => {
    expect(wrapper.vm.$options.name).toMatch("homeLayout");
  });
});
