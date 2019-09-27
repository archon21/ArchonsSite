import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar } from '../components';
import {
  Block,
  WindoW,
  GalleryBlock,
  Flex,
  Divider,
  Animator
} from '../sub-components/containers';
import { Video, Fab, List, Table, Carousel, Iterable } from '../sub-components';
import Contact from './Contact';

class Home extends Component {
  state = {
    scrolled: 0,
    introText: '',
    open: false
  };
  about = React.createRef();
  work = React.createRef();
  project = React.createRef();
  aboutBlock = React.createRef();
  workBlock = React.createRef();
  currentWorkBlock = React.createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setStage(0);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    this.setState({ scrolled: window.pageYOffset });
  };

  handleNav = () => {
    const { open } = this.state;
    const newOpen = !open;
    this.setState({ open: newOpen });
  };

  startAct = (line, totalTiming) => {
    setTimeout(() => {
      this.setState({ introText: line });
    }, totalTiming);
  };

  setStage = async counter => {
    const introText = [
      { value: 'Hello...      ', timing: 2500 },
      { value: 'And Welcome to my Site!         ', timing: 2500 },
      { value: 'I am a Web Developer         ', timing: 2500 },
      {
        value: 'Well... More of a Fullstack Developer.           ',
        timing: 2500
      },
      { value: 'Let me just show you!        ', timing: 2500 },
      { value: '', timing: 2500 }
    ];
    let totalTiming = 0;
    for (let i = 0; i < introText.length; i++) {
      const { value, timing } = introText[i];
      const timeToCompleteAct = timing / value.length;

      // console.log(totalTiming, timing);
      setTimeout(() => {
        let totalInnerTiming = 0;
        let line = '';
        for (let i = 0; i < value.length; i++) {
          // console.log(timeToCompleteAct, totalTiming);
          line = value.slice(0, i);
          this.startAct(line, totalInnerTiming);
          totalInnerTiming = totalInnerTiming + timeToCompleteAct;
        }
        if (i === introText.length - 1 && window.pageYOffset < 100) {
          console.log(window);
          window.scrollTo(null, 500);
        }
      }, totalTiming);

      totalTiming = totalTiming + timing;
    }
  };

  render() {
    const {
      state,
      props,
      aboutBlock,
      workBlock,
      about,
      work,
      project,
      currentWorkBlock
    } = this;
    const { charities, sporting, projects, works, currentWorks } = props;
    const { scrolled, introText, open } = state;

    return (
      <div style={{ overflowX: 'hidden' }} className="flex column align-end">
        <Navbar
          handleNav={this.handleNav}
          about={this.about.current && this.about.current.offsetTop}
          project={this.project.current && this.project.current.offsetTop}
          work={this.work.current && this.work.current.offsetTop}
          open={open}
          currentWorkBlock={
            this.currentWorkBlock.current &&
            this.currentWorkBlock.current.offsetTop
          }
        />
        <button
          onClick={this.handleNav}
          className={`${open ? 'open-nav--open open-nav' : 'open-nav'}`}
        >
          <i className="material-icons">keyboard_arrow_down</i>
        </button>

        <WindoW
          column
          video
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/Backgrounds%2Fblack-and-white-clouds-dark-557782.jpg?alt=media&token=a24d9dcd-9074-44d0-9610-8a14c53af4b8"
        >
          {/* <p className="headline-4 align-self-center">

          root@archon:~$
        </p> */}

          <textarea
            name="textarea"
            className="stage headline-3"
            value={introText}
          />
        </WindoW>
        <WindoW
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/Backgrounds%2Farchitecture-black-and-white-buildings-1437493.jpg?alt=media&token=c4a231cc-45a4-4682-ac99-3bcc610edaa7"
          column
        >
          <Divider
            border
            backgroundColor="background-primary"
            color="color-secondary"
            forwardedRef={currentWorkBlock}
          >
            <h3 className="headline-3">Current Work</h3>
          </Divider>
          <Animator
            inRef={currentWorkBlock}
            scrolled={scrolled}
            animation="a-wrapper--left"
            refName={name}
            maxWidth="maxw-1100px"
            marigin="0"
          >
            {currentWorks.map(work => {
              return <Iterable key={work.name} project={work} />;
            })}
          </Animator>
        </WindoW>
        <WindoW
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/Backgrounds%2Farchitecture-buildings-city-1980720.jpg?alt=media&token=bced9b51-f74a-4d0d-95c2-a45d88048de3"
          column
        >
          <Divider
            border
            backgroundColor="background-primary"
            color="color-secondary"
            forwardedRef={work}
          >
            <h3 className="headline-3">Completed Work</h3>
          </Divider>
          <Animator
            inRef={work}
            scrolled={scrolled}
            animation="a-wrapper--left"
            refName={name}
            maxWidth="maxw-1100px"
            marigin="0"
          >
            {works.map(work => {
              return <Iterable key={work.name} project={work} />;
            })}
          </Animator>
        </WindoW>

        <WindoW
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/Backgrounds%2F1-wtc-america-architecture-374710.jpg?alt=media&token=b8d51de3-c602-452e-ae8b-815a375006f0"
          column
        >
          <Divider
            border
            backgroundColor="background-primary"
            color="color-secondary"
            forwardedRef={project}
          >
            <h3 className="headline-3">Projects</h3>
          </Divider>
          <br />

          <Animator
            inRef={workBlock}
            scrolled={scrolled}
            animation="a-wrapper--left"
            refName={name}
            maxWidth="maxw-1100px"
            marigin="0"
          >
            {projects.map(project => {
              return <Iterable key={project.name} project={project} />;
            })}
          </Animator>
        </WindoW>
        <WindoW
          justify="justify-start"
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/Backgrounds%2Farchitecture-black-black-and-white-169978.jpg?alt=media&token=bc10acb1-b8b3-4434-8cdb-78fb346b56db"
          column
        >
          <Divider
            forwardedRef={about}
            border
            backgroundColor="background-primary"
            color="color-secondary"
          >
            <h1 className="headline-4">Ryan Wetmore</h1>
            <h5 className="headline-5">
              New Haven, CT | Fullstack Developer | Tech Fanatic
            </h5>
          </Divider>
          <br />
          <div className="flex row align-center justify-center wrap w-90">
            <Animator
              inRef={aboutBlock}
              scrolled={scrolled}
              animation="a-wrapper--left"
              maxWidth="maxw-800px"
            >
              <Block
                column
                type="info-card"
                backgroundColor="background-secondary--op"
                color="color-primary"
                maxWidth="w-90"
              >
                <h5 className="headline-4 my-20px">Who Am I?</h5>
                <div className="flex row align-center justify-center my-10px">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/ryan-wetmore/"
                  >
                    <i className="fab fa-linkedin text-decoration-none color-primary" />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/archon21"
                  >
                    <i className="fab fa-github-square text-decoration-none color-primary" />
                  </a>
                </div>
                <p className="body-1 p-20px">
                  I am a Full Stack Web Developer that began learning code on my
                  own and after seeing Fullstack Academy's course after a few
                  personal projects, I applied and attended. During this intense
                  and fast paced course, I worked on several projects and
                  assignments that created a strong foundation for my skills in
                  Web Development. Now I continue to build on that knowledge by
                  working for various businesses applying their business logic
                  to the web!
                </p>
              </Block>
              <Block
                column
                type="info-card"
                backgroundColor="background-secondary--op"
                color="color-primary"
                maxWidth="w-90"
              >
                <Contact />
              </Block>
            </Animator>
          </div>
        </WindoW>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.init.projects,
  works: state.init.works,
  currentWorks: state.init.currentWorks
});

export default connect(mapStateToProps)(Home);
