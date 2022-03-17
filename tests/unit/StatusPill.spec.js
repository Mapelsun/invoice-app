import { shallowMount } from "@vue/test-utils";
import StatusPill from "@/components/shared/StatusPill.vue";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(StatusPill);
});

afterEach(() => {
  wrapper.destroy();
});

describe("StatusPill", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
