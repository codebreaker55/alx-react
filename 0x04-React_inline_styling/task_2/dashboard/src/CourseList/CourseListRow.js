import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = isHeader ? css(styles.headerRow) : css(styles.normalRow);
  
  return (
    <tr className={rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} className={css(styles.headerCell)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.headerCell)}>{textFirstCell}</th>
            <th className={css(styles.headerCell)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.normalCell)}>{textFirstCell}</td>
          <td className={css(styles.normalCell)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: "#deb5b545",
  },
  normalRow: {
    backgroundColor: "#f5f5f5ab",
  },
  headerCell: {
    fontWeight: 'bold',
    textAlign: 'left',
    padding: '10px',
  },
  normalCell: {
    textAlign: 'left',
    padding: '10px',
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
