import { shallowMount } from "@vue/test-utils";
import Nav from "@/components/nav/nav.vue";

describe("nav.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(Nav);
    expect(wrapper.text());
  });
});
