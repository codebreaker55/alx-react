import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";

function NotificationItem({ type = "default", html, value }) {
  return (
    <>
      {type && value ? <li data-notification-type={type}>{value}</li> : null}
      {html ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
    </>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.string,
};

export default NotificationItem;
