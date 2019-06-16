import React from 'react';
import { shallow } from 'enzyme';
import AppFooter from '../components/AppFooter';

describe('AppFooter Component', () => {

  it("Todo indicator starts with 0 todos", () => {
    const wrapper = shallow(<AppFooter />);
    const text = wrapper.find(".app-footer-counter").text();

    expect(text).toEqual("Tasks: 0");
  });

});