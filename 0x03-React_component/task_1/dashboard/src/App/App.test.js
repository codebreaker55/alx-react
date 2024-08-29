/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";

describe("App component", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });

  it("should render Notifications component", () => {
    const component = shallow(<App />);
    expect(component.find(Notifications).exists()).toBe(true);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);
    expect(component.find(Header).exists()).toBe(true);
  });

  it("should render Login component", () => {
    const component = shallow(<App />);
    expect(component.find(Login).exists()).toBe(true);
  });

  it("should render Footer component", () => {
    const component = shallow(<App />);
    expect(component.find(Footer).exists()).toBe(true);
  });

  it("should not render CourseList if logged out", () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.find(CourseList).exists()).toBe(false);
  });

  it("should render CourseList if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.find(CourseList).exists()).toBe(true);
    expect(component.find(Login).exists()).toBe(false);
  });
});

describe("Keyboard events", () => {
  let originalAlert;

  beforeAll(() => {
    // save the original alert function
    originalAlert = window.alert;
  });

  beforeEach(() => {
    // mock the alert function before each test
    window.alert = jest.fn();
  });

  afterEach(() => {
    // restore the original alert function after each test
    window.alert.mockRestore();
  });

  afterAll(() => {
    // restore the original alert function after all tests
    window.alert = originalAlert;
  });

  it("should call logOut function when ctrl + h is pressed", () => {
    const logOutMock = jest.fn();
    const wrapper = mount(<App logOut={logOutMock} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);
    expect(logOutMock).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  it("should call alert function when ctrl + h is pressed", () => {
    const wrapper = mount(<App />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);
    expect(window.alert).toHaveBeenCalled();
    wrapper.unmount();
  });

  it('should display "Logging you out" alert when ctrl + h is pressed', () => {
    const wrapper = mount(<App />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    wrapper.unmount();
  });
});
