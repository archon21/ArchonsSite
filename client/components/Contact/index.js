import React, { Component } from 'react';
import { connect } from 'react-redux';
import { alertInteraction, sendMessage } from '../../store';

class ContactForm extends Component {
  state = {
    email: '',
    name: '',
    message: '',
    subject: '',
    phone: '',
    all: false,
    error: {},
    sent: false
  };
  dataHook = data => {
    this.setState({ [data.name]: data.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    let all = true;
    const error = {};
    Object.entries(this.state).forEach(field => {
      if (field[1] === '') {
        all = false;
        error[field[0]] = true;
      }
    });
    if (all) {
      this.props.sendMessage(this.state);
      return this.setState({ feedback: 'Your message has been sent' });
    } else {
      return this.setState({
        feedback: 'Fill out all fields before submiting'
      });
    }
  };
  render() {
    const { feedback, name, email, phone, subject, message } = this.state;
    return (
      <form className="flex column align-center" onSubmit={this.handleSubmit}>
        <h4 className="headline-4 color-primary my-20px">Lets work together!</h4>
        <div className="flex row align-center wrap">
          <input
            className="textfield"
            placeholder="Name"
            name="name"
            value={name}
          />
          <input
            className="textfield"
            placeholder="Email"
            name="email"
            value={email}
          />
          <input
            className="textfield"
            placeholder="Phone"
            name="phone"
            value={phone}
          />
          <input
            className="textfield"
            placeholder="Subject"
            name="subject"
            value={subject}
          />
          <input
            className="textfield"
            placeholder="Whats on your mind?"
            name="message"
            value={message}
            multiline
          />
        </div>
        <span className="color-primary headline-5">{feedback}</span>
        <button className="button" type="submit">
          Send
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  alertInteraction: () => dispatch(alertInteraction(false)),
  sendMessage: message => dispatch(sendMessage(message))
});

export default connect(
  null,
  mapDispatchToProps
)(ContactForm);
