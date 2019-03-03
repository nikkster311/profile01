import React from 'react';
import axios from 'axios';
// import pic from './IMG_3491.JPG';
// import './fontawesome-free-5.7.0-web/js/all'
//

const API_PATH = './index.php';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: "",
      error: "",
      mailsent: ""
    }

  this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    return(
      <div className="contactPgContainer">
        <h2>CONTACT ME</h2>
        <p>I'd love to hear from you! Please reach out with inquiries, thoughts, questions, or concerns. Use the form below or write to nikki@nikkster.tech. You'll receive a reply within 1-2 working days.</p>
        <section className="contactForm">
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>First Name</label>
              <input
                type="text"
                id="firstname"
                placeholder="Your first name"
                value={this.state.firstname}
                onChange={e => this.setState({firstname: e.target.value})}/>
              <label>Last Name</label>
              <input
                type="text"
                id="lastname"
                placeholder="Your last name"
                value={this.state.lastname}
                onChange={e => this.setState({lastname: e.target.value})}/>
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={this.state.email}
                onChange={e => this.setState({email: e.target.value})}/>
              <label>Subject</label>
              <input
                type="subject"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={this.state.subject}
                onChange={e => this.setState({sbject: e.target.value})} />
              <label>Message</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something here"
                value={this.state.message}
                onChange={e => this.setState({message: e.target.value}, () => {
                  console.log(this.state.firstname, this.state.lastname, this.state.email, this.state.message)
                })}></textarea>
              <input type="submit" value="Submit"/>

              <div>
                {this.state.mailSent &&
                  <div>Success! I'll get back to you soon.</div>
                }
              </div>


            </form>
          </div>
        </section>
      </div>
    );
  }
}


export default ContactPage;
