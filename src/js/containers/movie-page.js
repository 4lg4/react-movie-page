import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import fetch from 'node-fetch';
import Section from '../components/section';
import FormSection from '../components/form-section';
import LoadingContent from '../components/loading-content';

import Header from '../components/header';
import HowToUse from '../components/how-to-use';
import Footer from '../components/footer';
import FirstSection from '../components/first-section';
import { toArray, isHtmlElement, isAValidEmail } from '../helpers';

import '../../scss/pages/movie-page.scss';

class SendEmailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      from: '',
      to: '',
      cc: '',
      bcc: '',
      from: '',
      text: '',
      subject: '',
      errors: [],
      success: '',
    };

    this.fieldUpdate = this.fieldUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({loading: true});
  }

  fieldUpdate(key, value) {
    this.setState({[key]: value});
  }

  isAValidForm({ from, to, cc, bcc, subject, text }) {

    let errors = [];
    if (!isAValidEmail(from)) {
      errors.push({ key: 'from', message: 'from: should be a valid email' });
    }

    if (to.some(email => !isAValidEmail(email))) {
      errors.push({ key: 'to', message: 'TO: should be a valid email' });
    }

    if (cc.some(email => !isAValidEmail(email))) {
      errors.push({ key: 'cc', message: 'CC: should be a valid email' });
    }

    if (bcc.some(email => !isAValidEmail(email))) {
      errors.push({ key: 'bcc', message: 'BCC: should be a valid email' });
    }

    if (!subject) {
      errors.push({ key: 'subject', message: 'SUBJECT: should be informed' });
    }
    if (!text) {
      errors.push({ key: 'text', message: 'TEXT: should be informed' });
    }

    if (isHtmlElement(text)) {
      errors.push({ key: 'text', message: 'TEXT: should be text format only' });
    }

    return { valid: errors.length === 0, errors };
  }

  async handleSubmit(event) {
    event.preventDefault();
    const EMAIL_SEPARATOR = ',';
    this.setState({ errors: [], success: '' });

    const message =  {
      from: this.state.from.trim(),
      to: toArray(this.state.to, EMAIL_SEPARATOR),
      cc: toArray(this.state.cc, EMAIL_SEPARATOR),
      bcc: toArray(this.state.bcc, EMAIL_SEPARATOR),
      subject: this.state.subject.trim(),
      text: this.state.text.trim(),
    };

    const { valid, errors } = this.isAValidForm(message);

    if (!valid) {
      this.setState({ errors });
      setTimeout(() => this.setState({ errors: [] }), 5000);
      return;
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    this.setState({ loading: false });

    try {
      const SUCCESSFUL_POST = 201;
      const response = await fetch(`${this.props.apiUrl}/v1`, options);
      const json = await response.json();
      if (response.status !== SUCCESSFUL_POST) {
        throw new Error(json.message);
      }
      this.setState({ loading: true, success: json.message });
    } catch (error) {
      this.setState({
        errors: [{ key: 'apiError', message: error.message }],
        loading: true
      });
    }
    setTimeout(() => this.setState({ errors: [], success: '' }), 5000);
  }

  render() {
    if (!this.state.loading) {
      return <LoadingContent />;
    }

    return (

      <Fragment>
        <Header />
        <FirstSection
          title="Reactor Email Page"
          description="Sending emails like a boss!"
        />
        <Section className="home-page-wrapper is-1-column">
          <HowToUse />
          {this.state.errors.length > 0 &&  (
            <div className="errors-wrapper">
              {this.state.errors.map(({ message }) => <p>{message}</p>)}
            </div>
          )}
          {this.state.success &&  (
            <div className="success-wrapper">
              <p>{this.state.success}</p>
            </div>
          )}
          <FormSection
            from={this.state.from}
            to={this.state.to}
            cc={this.state.cc}
            bcc={this.state.bcc}
            subject={this.state.subject}
            text={this.state.text}
            onFieldUpdate={this.fieldUpdate}
            errors={this.state.errors}
            onSubmit={this.handleSubmit}
          />
        </Section>
        <Footer />
      </Fragment>
    );
  }
}

SendEmailPage.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  cc: PropTypes.string.isRequired,
  bcc: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  apiUrl: PropTypes.string,
};

SendEmailPage.defaultProps = {
  from: '',
  to: '',
  cc: '',
  bcc: '',
  from: '',
  text: '',
  subject: '',
  apiUrl: 'http://localhost:3000',
}

export default SendEmailPage
