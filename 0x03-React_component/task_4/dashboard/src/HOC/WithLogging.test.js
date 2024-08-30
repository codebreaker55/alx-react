import React from "react";
import { shallow } from "enzyme";
import WithLogging from "./WithLogging";

const TestComponent = () => <p>Test Component</p>;

describe("WithLogging tests", () => {
  it("should call console.log on mount and dismount", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const NewComponent = WithLogging(TestComponent);
    const wrapper = shallow(<NewComponent />);

    // Check that console.log was called once on mount
    expect(spy).toBeCalledTimes(1);
    wrapper.unmount();
    // Check that console.log was called again on unmount
    expect(spy).toBeCalledTimes(2);
    spy.mockRestore();
  });

  it("should log out the right message on mount and on unmount", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const NewComponent = WithLogging(TestComponent);
    const wrapper = shallow(<NewComponent />);

    // Check that the log message for mounting is correct
    expect(spy).toBeCalledWith("Component TestComponent is mounted");
    wrapper.unmount();
    // Check that the log message for unmounting is correct
    expect(spy).toBeCalledWith("Component TestComponent is going to unmount");
    spy.mockRestore();
  });
});
