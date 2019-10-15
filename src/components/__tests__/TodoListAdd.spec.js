/* global describe, it, expect */

import { shallowMount } from "@vue/test-utils";
import Vue from "vue";

import * as store from "@/store/store";
import TodoListAdd from "@/components/TodoListAdd";

describe("<TodoListAdd></TodoListAdd>", () => {
  it("Tester component rendering", () => {
    const propsData = { prop: {} };
    const Constructor = Vue.extend(TodoListAdd);
    const Component = new Constructor({ propsData, store });
    const wrapper = shallowMount(Component);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
