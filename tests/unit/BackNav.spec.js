import { shallowMount } from "@vue/test-utils";
import BackNav from "@/components/shared/BackNav.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(BackNav);
});

afterEach(() => {
  wrapper.destroy();
});

describe("BackNav", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
