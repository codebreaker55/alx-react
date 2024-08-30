import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { getLatestNotification } from "../utils/utils";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind the event handler to the current instance
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // Sample data for courses and notifications
  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ];

  // Handler for key press events
  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  // Add event listener on mount
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  // Remove event listener on unmount
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <React.Fragment>
	    <div className="App">
	      <div className="heading-section">
                <Notifications listNotifications={this.listNotifications} />
                <Header />
            </div>
        {this.props.isLoggedIn ? (
	  <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={this.listCourses} />
	  </BodySectionWithMarginBottom>
        ) : (
	  <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
	  </BodySectionWithMarginBottom>
        )}
	<BodySection title="News from the school">
            <p>
	    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo ipsa
              iste vero dolor voluptates.
	    </p>
	  </BodySection>
	  <Footer />
        </div>
      </React.Fragment>
    );
  }
}

// Default props for the component
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

// Prop types for validation
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;

