import { shallowMount } from "@vue/test-utils";
import AppDropDown from "@/components/widgets/AppDropDown.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(AppDropDown);
});

afterEach(() => {
  wrapper.destroy();
});

describe("AppDropDown", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
