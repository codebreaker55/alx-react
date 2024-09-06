import React from "react";
import "./CourseList.css";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";

function CourseList({ listCourses }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit }) => (
            <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} isHeader={false} />
          ))
        ) : (
          <CourseListRow textFirstCell="No course available yet" textSecondCell={null} isHeader={false} />
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
