import React from "react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

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

  it("renders correct header rows", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    // Check the header rows' props
    const headerRows = wrapper.find("thead").find(CourseListRow);
    expect(headerRows).toHaveLength(2);

    expect(headerRows.at(0).props()).toEqual({
      textFirstCell: "Course name",
      textSecondCell: "Credit",
      isHeader: true,
    });

    expect(headerRows.at(1).props()).toEqual({
      textFirstCell: "Available courses",
      textSecondCell: null,
      isHeader: true,
    });
  });

  it("renders correct body rows when courses are passed", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    // Check the body rows' props
    const bodyRows = wrapper.find("tbody").find(CourseListRow);
    expect(bodyRows).toHaveLength(3);

    expect(bodyRows.at(0).props()).toEqual({
      textFirstCell: "ES6",
      textSecondCell: 60,
      isHeader: false,
    });

    expect(bodyRows.at(1).props()).toEqual({
      textFirstCell: "Webpack",
      textSecondCell: 20,
      isHeader: false,
    });

    expect(bodyRows.at(2).props()).toEqual({
      textFirstCell: "React",
      textSecondCell: 40,
      isHeader: false,
    });
  });

  it("renders 'No course available yet' when no courses are passed", () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);

    // Check the single row's props
    const bodyRows = wrapper.find("tbody").find(CourseListRow);
    expect(bodyRows).toHaveLength(1);

    expect(bodyRows.at(0).props()).toEqual({
      textFirstCell: "No course available yet",
      textSecondCell: null,
      isHeader: false,
    });
  });
});
