import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from '../components/AppHeader';

describe('AppHeader Component', () => {
  it("Check that AppHeader renders", () => {

    const wrapper = shallow(<AppHeader />);
    const text = wrapper.find("h1.app-header").text();

    expect(text).toEqual("MyTodo");
  });

});