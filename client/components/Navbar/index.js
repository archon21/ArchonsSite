import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { alertInteraction } from '../../store';
import { connect } from 'react-redux';
import Contact from '../Contact';

class Navbar extends Component {
  state = {
    selectedLink: ''
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    const arr = pathname.split('/');
    const selectedLink = arr[arr.length - 1];
    this.setState({ selectedLink });
  }

  openContact = () => {
    this.props.alertInteraction(true, <Contact />);
  };

  selectLink = link => {
    switch (link) {
      case 'about':
        this.props.handleNav();
        return window.scrollTo(null, this.props.about);
      case 'projects':
        this.props.handleNav();
        return window.scrollTo(null, this.props.project);
      case 'work':
        this.props.handleNav();
        return window.scrollTo(null, this.props.work);
      case 'currentwork':
        this.props.handleNav();
        return window.scrollTo(null, this.props.currentWorkBlock);
    }
  };

  render() {
    const { selectedLink } = this.state;
    const { open } = this.props;
    return (
      <nav
        id="nav"
        className={`${
          open ? 'nav--open' : ''
        } flex column black align-center justify-center`}
      >
        <img
          className="profile-pic"
          src="https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/_1170269%20copy%202.JPG?alt=media&token=def09c83-3d12-42fa-a64f-5b16f3fb2ee8"
        />
        <div className="flex row align-center wrap my-10px">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/ryan-wetmore/"
          >
            <i className="fab fa-linkedin text-decoration-none color-secondary" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/archon21"
          >
            <i className="fab fa-github-square text-decoration-none color-secondary" />
          </a>


        </div>
        <a
          className="headline-6 color-white p-5px link"
          onClick={() => this.selectLink('currentwork')}
        >
          CURRENT WORK & PROJECTS
        </a>
        <a
          className="headline-6 color-white p-5px link"
          onClick={() => this.selectLink('work')}
        >
          COMPLETED WORK
        </a>
        <a
          className="headline-6 color-white p-5px link"
          onClick={() => this.selectLink('projects')}
        >
          COMPLETED PROJECTS
        </a>
        <a
          className="headline-6 color-white p-5px link"
          onClick={() => this.selectLink('about')}
        >
          ABOUT ME & CONTACT
        </a>
        <a
            rel="noopener noreferrer"
            className="resume__button background-secondary color-primary my-10px flex align-center justify-center headline-5"
            target="_blank"
            href="https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/resumes%2Fryan.pdf?alt=media&token=a886c6b7-f6fd-4428-ab07-b78c71eb9ab7"
          >
            View Resume
        </a>

        {/* <span
          className="headline-6 p-5px color-white link"
          onClick={this.openContact}
        >
          CONTACT
        </span> */}
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  alertInteraction: (status, template) =>
    dispatch(alertInteraction(status, template))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Navbar)
);
