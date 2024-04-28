import {describe, it, expect, afterEach} from 'vitest';
import { mount } from '@vue/test-utils'
import HelloWorld from "./HelloWorld.vue";

describe('useStorage', () => {
  it('useStorage get Methods', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.vm.count).toBe(0)
  });
})
