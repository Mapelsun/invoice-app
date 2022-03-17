import { shallowMount } from "@vue/test-utils";
import AppLoader from "@/components/widgets/AppLoader.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(AppLoader);
});

afterEach(() => {
  wrapper.destroy();
});

describe("AppLoader", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
