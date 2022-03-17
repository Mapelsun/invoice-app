import { shallowMount } from "@vue/test-utils";
import MainSidebar from "@/components/layouts/MainSidebar.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(MainSidebar);
});

afterEach(() => {
  wrapper.destroy();
});

describe("MainSidebar", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
