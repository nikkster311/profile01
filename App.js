import React, { Component } from 'react';
import './App.css';
import './header.css'
import "./mainPage.css"
import "./contactPage.css"
import MainPage from "./mainPage";
import './fontawesome-free-5.7.0-web/js/all';
import ProjectsPage from "./projectsPage";
import ContactPage from "./contactPage";
// import pic from './IMG_3491.JPG';

// import FAlinks from './FAlinks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePg: true,
      projPg: false,
      contactPg: false,

    };
    this.goHome = this.goHome.bind(this);
    this.goProj = this.goProj.bind(this);
    this.goContact = this.goContact.bind(this);
    // this.projHomeLinkHandler = this.projHomeLinkHandler.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }
//IF DECIDING TO OPEN IN NEW TAB, USE BELOW AND ADD ONCLICK TO LINK
  // onClick(event) {
  //   var win = window.open("https://twitter.com/nikksterDotTech", '_blank');
  //   win.focus();
  // }



  // initializeReactGA() {
  //   ReactGA.initialize('UA-133930555-1');
  //   ReactGA.pageview('/homepage');
  // }

  // projHomeLinkHandler(event) {
  //   this.setState({homePg: !this.state.homePg})
  //   this.componentDidMount();
  // }

  componentDidMount() {
    window.scrollTo(0, 230)
  }

  goHome(e) {
    this.setState({homePg: true, projPg: false, contactPg: false})
  }

  goProj(e) {
    this.setState({homePg: false, projPg: true, contactPg: false})
  }
  goContact(e) {
    this.setState({homePg: false, projPg: false, contactPg: true})
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
            <a href="https://github.com/nikkster311">
              <i className="fab fa-github fa-fw fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="headerMenu">
          {this.state.homePg ?
             <button className="headerMenuBtnCurrent">Home</button> :
             <button className="headerMenuBtn" onClick={this.goHome}>Home</button>}
          {this.state.projPg ?
            <button className="headerMenuBtnCurrent">Projects</button> :
            <button className="headerMenuBtn" onClick={this.goProj}>Projects</button>}
          {this.state.contactPg ?
            <button className="headerMenuBtnCurrent">Contact Me</button> :
            <button className="headerMenuBtn" onClick={this.goContact}>Contact Me</button>}
        </div>
      </header>



        {this.state.homePg ? <MainPage /> : null}
        {this.state.projPg ? <ProjectsPage /> : null}
        {this.state.contactPg ? <ContactPage /> : null}




        <footer className="App-footer">


        <div className="footerLeft">
          <h4>Want to get in touch?</h4>
          <p>Send me an email</p>
          <p><a href="mailto:nikki@nikkster.tech">nikki@nikkster.tech</a>
          </p>
          <p>Copyright 2019</p>
        </div>
        <div className="footerIcons">
          <p>
            <a href="mailto:nikki@nikkster.tech">
              Send me an email <i className="fa fa-envelope fa-fw"></i>
            </a>
          </p>
          <p>
            <a href="https://twitter.com/nikksterDotTech">
              Sometimes I tweet <i className="fab fa-twitter fa-fw"></i>
            </a>
          </p>
          <p>
          <a href="https://github.com/nikkster311">
            Check out my work <i className="fab fa-github fa-fw"></i>
          </a>
          </p>
        </div>



        </footer>
      </div>
    );
  }
}

export default App;


// GOOGLE ANALYTICS TAG
//
//         {/* Global site tag (gtag.js) - Google Analytics */}
//         {<script async src="https://www.googletagmanager.com/gtag/js?id=UA-133930555-1"></script>}
//         {window.dataLayer = window.dataLayer || []
//           function gtag(){dataLayer.push(arguments)
//             gtag('js', new Date())
//
//             gtag('config', 'UA-133930555-1');}
// }






//this goes right before </header>
// <div className="projHomeToggleDiv">
//   <button className="projHomeToggleBtn" onClick={this.projHomeLinkHandler}>{this.state.homePg ? "Projects" : "Home"}</button>
// </div>




//
// <a href="https://nikkstertakesontech.wordpress.com">
//   <i className="fab fa-wordpress fa-fw fa-2x"></i>
// </a>




// <p>Sometimes I write
// <a href="https://nikkstertakesontech.wordpress.com">
//   <i className="fab fa-wordpress fa-fw"></i>
// </a>
// </p>
