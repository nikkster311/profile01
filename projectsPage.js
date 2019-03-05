import React from 'react';
import './fontawesome-free-5.7.0-web/js/all'
import "./projectsPage.css"


const projLinkList = [
  {name: "theOtherFour", link: "https://nikkster311.github.io/the-other-four-v-01"}
]

var projNames = projLinkList.map(x => x.name);
console.log(projNames)
var projLinks = projLinkList.map(x => x.link);
console.log(projLinks)

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projLink: "",
      projName: ""
    }
  // this.projectClickHandler = this.projectClickHandler.bind(this);
  this.assignProjLink = this.assignProjLink.bind(this);
  this.openProj = this.openProj.bind(this);
  }

openProj = () => {
  window.open(this.state.projLink);
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
  this.setState({projLink: projLink}, () => {
    this.openProj();
  })
  }

//displays modal, sets project name to value of button clicked, runs assignProjLink
  projectClickHandler(i) {
    console.log("running projectClickHandler..")
    console.log("i = " + i)
    this.setState({projName: i}, () => {
      this.assignProjLink();
    })
    console.log("running assignProjLink..")

  }


  render() {
    return (


      <div className="wholeBodyContainer">
        <div className="body">

        <section className="parallax"><p>Projects</p></section>


        <section className="projectsSection">
          <h2>Projects</h2>
          <section className="indivProj" value="theOtherFour" onClick={() => this.projectClickHandler("theOtherFour")}>
            <h4>The Other Four</h4>
            <p>Take 15 seconds to stop and smell the roses.</p>
            <p>Created with React</p>
            <p>February 2019</p>
          </section>
          <section className="indivProj" value="theOtherFour" onClick={() => this.projectClickHandler("theOtherFour")}>
            <h4>The Other Four</h4>
            <p>Take 15 seconds to stop and smell the roses.</p>
            <p>Created with React</p>
            <p>February 2019</p>
          </section>
          <section className="indivProj" value="theOtherFour" onClick={() => this.projectClickHandler("theOtherFour")}>
            <h4>The Other Four</h4>
            <p>Take 15 seconds to stop and smell the roses.</p>
            <p>Created with React</p>
            <p>February 2019</p>
          </section>
          <section className="indivProj" value="theOtherFour" onClick={() => this.projectClickHandler("theOtherFour")}>
            <h4>The Other Four</h4>
            <p>Take 15 seconds to stop and smell the roses.</p>
            <p>Created with React</p>
            <p>February 2019</p>
          </section>


        </section>


        <section className="parallax-small"></section>


        // <div className="bg-modal" style={{display: this.state.displayModal ? "flex" : "none" }}>
        //   <div className="modal-content">
        //     <button className="modal-close" onClick={this.exitModalHandler}>+</button>
        //     <iframe className="iframeModal" title="proj" src={this.state.projLink}></iframe>
        //   </div>
        // </div>


        </div>
      </div>
    )
  }
}


export default ProjectsPage;
