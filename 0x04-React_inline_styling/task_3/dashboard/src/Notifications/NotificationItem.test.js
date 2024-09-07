import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("rendering components", () => {
  it("renders NotificationItem component without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html from type="default" value="test" props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.html()).toContain('data-notification-type="default"');
    expect(wrapper.html()).toContain('test');
  });

  it('renders correct html from html="<u>test</u>" props', () => {
    const wrapper = shallow(<NotificationItem html="<u>test</u>" />);
    expect(wrapper.html()).toContain('data-urgent="true"');
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});

describe("onclick event behaves as it should", () => {
  it("should call console.log", () => {
    const spy = jest.fn();
    const wrapper = shallow(<NotificationItem value="test item" markAsRead={spy} id={1} />);
    
    wrapper.find("li").simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(1);
  });
});
