import { shallowMount } from "@vue/test-utils";
import AppModal from "@/components/widgets/AppModal.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(AppModal);
});

afterEach(() => {
  wrapper.destroy();
});

describe("AppModal", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
