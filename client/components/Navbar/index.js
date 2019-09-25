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


        <a
          className="headline-6 color-white p-5px link"
          onClick={() => this.selectLink('currentwork')}
        >
          CURRENT WORK
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
          PROJECTS
        </a>
        <a
          className="headline-6 color-white p-5px link"
          onClick={() => this.selectLink('about')}
        >
          ABOUT ME
        </a>
        {/* <Link
            className={`headline-6 color-white p-5px ${selectedLink ===
              'hayes-team' && 'selected'}`}

            onClick={() => this.selectLink('hayes-team')}
          >
            POJECTS
          </Link>
          <Link
            className={`headline-6 color-white p-5px ${selectedLink ===
              'property-services' && 'selected'}`}

            onClick={() => this.selectLink('property-services')}
          >
            EXPERIENCE
          </Link>
          <Link
            className={`headline-6 color-white p-5px ${selectedLink ===
              'development' && 'selected'}`}
            onClick={() => this.selectLink('development')}

          >
            SKILLS
          </Link> */}

        <a className="headline-6 color-white link" onClick={this.openContact}>
          CONTACT
        </a>
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
