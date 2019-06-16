import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TodoCheck from '../components/TodoCheck';

describe('TodoCheck Component', () => {
  it("Test checkbox is not checked", () => {
    const tree = renderer.create(<TodoCheck status={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Test checkbox is checked", () => {
    const tree = renderer.create(<TodoCheck status={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});