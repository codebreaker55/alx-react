import React from "react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe("CourseList component tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the header row and course rows correctly", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    // check the header row
    const headerRow = wrapper.find("thead").childAt(0);
    expect(headerRow.prop("textFirstCell")).toEqual("Available courses");
    
    const headerSecondCell = headerRow.prop("textSecondCell");
    if (headerSecondCell !== null) {
      expect(headerSecondCell).toEqual("Credit");
    } else {
      expect(headerSecondCell).toBeNull();
    }

    expect(headerRow.prop("isHeader")).toBe(true);

    // check the body rows
    expect(wrapper.find("tbody").children()).toHaveLength(3);
    expect(wrapper.find("tbody").childAt(0)).toMatchSnapshot();
    expect(wrapper.find("tbody").childAt(1)).toMatchSnapshot();
    expect(wrapper.find("tbody").childAt(2)).toMatchSnapshot();
  });

  it("renders correctly when passed a list of courses", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    expect(wrapper.find("tbody").children()).toHaveLength(3);
    expect(wrapper.find("tbody").childAt(0)).toMatchSnapshot();
    expect(wrapper.find("tbody").childAt(1)).toMatchSnapshot();
    expect(wrapper.find("tbody").childAt(2)).toMatchSnapshot();
  });
});

