import React, { Component } from 'react';
import './App.css';
import './header.css'
import "./mainPage.css"
import MainPage from "./mainPage";
import './fontawesome-free-5.7.0-web/js/all';
import ProjectsPage from "./projectsPage";
import ContactPage from "./contactPage";
import pic from './IMG_3491.JPG';

// import FAlinks from './FAlinks';

const hrefOptions = {
  "twitter": "https://nikkstertakesontech.wordpress.com/",
  "wordpress": "https://twitter.com/nikksterDotTech"
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePg: true

    };

    this.projHomeLinkHandler = this.projHomeLinkHandler.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }
//IF DECIDING TO OPEN IN NEW TAB, USE BELOW AND ADD ONCLICK TO LINK
  // onClick(event) {
  //   var win = window.open("https://twitter.com/nikksterDotTech", '_blank');
  //   win.focus();
  // }
  projHomeLinkHandler(event) {
    this.setState({homePg: !this.state.homePg})
    this.componentDidMount();
  }

  componentDidMount() {
    window.scrollTo(0, 230)
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">

        <div className="headerIcons">
        <p className="nikksterTechHeader">nikkster.tech</p>
          <div className="headerIconsOnly">
            <a href="mailto:nikki@nikkster.tech">
            <i className="fa fa-envelope fa-fw fa-2x"></i>
            </a>
            <a href="https://twitter.com/nikksterDotTech">
              <i className="fab fa-twitter fa-fw fa-2x"></i>
            </a>
            <a href="https://nikkstertakesontech.wordpress.com">
              <i className="fab fa-wordpress fa-fw fa-2x"></i>
            </a>
            <a href="https://github.com/nikkster311">
              <i className="fab fa-github fa-fw fa-2x"></i>
            </a>
          </div>
        </div>


      </header>



        {this.state.homePg ?
          <MainPage /> : <ProjectsPage />}



        <footer className="App-footer">


        <div className="footerLeft">
          <h4>Want to get in touch?</h4>
          <p>Send me an email</p>
          <p><a href="mailto:nikki@nikkster.tech">nikki@nikkster.tech</a>
          </p>
          <p>Copyright 2019</p>
        </div>




          <div className="footerIcons">
            <p>Send me an email
              <a href="mailto:nikki@nikkster.tech">
                <i className="fa fa-envelope fa-fw"></i>
              </a>
            </p>
            <p>Sometimes I tweet
              <a href="https://twitter.com/nikksterDotTech">
                <i className="fab fa-twitter fa-fw"></i>
              </a>
            </p>
              <p>Sometimes I write
              <a href="https://nikkstertakesontech.wordpress.com">
                <i className="fab fa-wordpress fa-fw"></i>
              </a>
            </p>
            <p>Check out my work
            <a href="https://github.com/nikkster311">
              <i className="fab fa-github fa-fw"></i>
            </a>
            </p>
          </div>



        </footer>
      </div>
    );
  }
}

export default App;


//this goes right before </header>
// <div className="projHomeToggleDiv">
//   <button className="projHomeToggleBtn" onClick={this.projHomeLinkHandler}>{this.state.homePg ? "Projects" : "Home"}</button>
// </div>
