import { shallowMount } from "@vue/test-utils";
import ActionButton from "@/components/shared/ActionButton.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(ActionButton);
});

afterEach(() => {
  wrapper.destroy();
});

describe("ActionButton", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
