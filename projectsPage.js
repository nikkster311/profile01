import React from 'react';
import './fontawesome-free-5.7.0-web/js/all'
import "./projectsPage.css"


const projLinkList = [
  {name: "The Other Four", link: "https://nikkster311.github.io/the-other-four-v-01"}
]

var projNames = projLinkList.map(x => x.name);
console.log(projNames)
var projLinks = projLinkList.map(x => x.link);
console.log(projLinks)

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayModal: false,
      projLink: "",
      projName: []
    }
  this.projectClickHandler = this.projectClickHandler.bind(this);
  this.exitModalHandler = this.exitModalHandler.bind(this);
  this.assignProjLink = this.assignProjLink.bind(this);


  }

//goes through projLinkList, finds name, assigns respective link to projLink
  assignProjLink = () => {
    console.log(this.state)
    console.log("assignProjLink starting..")
    for (var key in projNames) {
      console.log("key: " + key + ", projNames[key]: " + projNames[key] + ", this.state.projName: " + this.state.projName)
      if (projNames[key] === this.state.projName) {
        var projLink = projLinks[key]
      }
    }
  this.setState({link: projLink})
  }

//displays modal, sets project name to value of button clicked, runs assignProjLink
  projectClickHandler(e) {
    console.log("running projectClickHandler..")
    console.log("e.target.innerHTML = " + e.target.innerHTML)
    this.setState({displayModal: true})
    this.setState({projName: e.target.innerHTML}, () => {
      console.log(this.state)
    })
    console.log("running assignProjLink..")
    this.assignProjLink();
  }

//turns off modal
  exitModalHandler = () => {
    this.setState({displayModal: false})
  }


  render() {
    return (


      <div className="wholeBodyContainer">
        <div className="body">
        {console.log(this.state)}

        <section className="parallax"><p>Projects</p></section>



        <section className="projects">
          <div className="projectBoxes">
          <button onClick={this.projectClickHandler}>
            <h4>The Other Four</h4>
            <p>Take 15 seconds to stop and smell the roses.</p>
            <p>Created with React</p>
            <p>February 2019</p>
          </button>
        </div>
        </section>

        <section className="parallax-small"></section>
        <div className="bg-modal" style={{display: this.state.displayModal ? "flex" : "none" }}>
          <div className="modal-content">
            <button className="modal-close" onClick={this.exitModalHandler}>+</button>
            <iframe className="iframeModal" title="proj" src={this.state.projLink}></iframe>
          </div>
        </div>


        </div>
      </div>
    )
  }
}


export default ProjectsPage;


// "window.open('https://nikkster311.github.io/the-other-four-v-01/');">
