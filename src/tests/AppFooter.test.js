import React from 'react';
import { shallow } from 'enzyme';
import AppFooter from '../components/AppFooter';

describe('AppFooter Component', () => {
  it("Todo indicator starts with 0 todos", () => {
    const filters = {
      "all": true,
      "active": false,
      "completed": false
    }

    const wrapper = shallow(<AppFooter todos={[]} onComplete={() => { }} filters={filters} />);
    const text = wrapper.find(".app-footer-counter").text();

    expect(text).toEqual("Tasks: 0");
  });

});