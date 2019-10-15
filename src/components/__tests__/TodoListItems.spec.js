/* global describe, it, expect */

import { shallowMount } from "@vue/test-utils";
import Vue from "vue";

import * as store from "@/store/store";
import TodoListItems from "@/components/TodoListItems";

describe("<TodoListItems></TodoListItems>", () => {
  it("Tester component rendering", () => {
    const propsData = { prop: {} };
    const Constructor = Vue.extend(TodoListItems);
    const Component = new Constructor({ propsData, store });
    const wrapper = shallowMount(Component);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
