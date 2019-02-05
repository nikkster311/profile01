import React from 'react';
import pic from './IMG_3491.JPG';
import './fontawesome-free-5.7.0-web/js/all'

class mainPage extends React.Component {

  render() {
    return (

      <div className="wholeBodyContainer">
        <div className="parallax-small">        </div>
        <div className="body">
          <div className="bodyIntro">
            <p className="hi">Hi, I'm Nikki.</p>
            <h3>I'm a fullstack developer passionate about building things.</h3>
            <h3>Currently based in Los Angeles, CA</h3>
          </div>
          <div className="parallax-small"></div>

          <div className="blurb">
            <h1>Determination, Care, Vision</h1>
            <p className="blurbP">I create quality, responsive websites and user-friendly applications.</p>
            <p className="blurbP">The outdoors inspires my work and drives me to build beautiful, thoughtful creations.</p>
          </div>

          <div className="skillsContainer">
            <div className="skill">
              <i className="fas fa-code fa-2x"></i>
              <h4>Clean code</h4>
              <p>My code is always clean, thoroughly-commented, concise, and functional, making bug fixes and edits a breeze.</p>
            </div>
            <div className="skill">
              <i className="fas fa-leaf fa-2x"></i>
              <h4>Science and Communication</h4>
              <p>My background in science and scientific communication gives be an ability to communicate with others who may or may not be familiar with complex topics.</p>
            </div>
            <div className="skill">
              <i className="fas fa-calendar-check fa-2x"></i>
              <h4>Organized</h4>
              <p>I'm organized with my time and stay on task with project goals.</p>
            </div>

          </div>





            <div className="LanguagesContainer">
              <span className="indvLang">
                <i className="fab fa-react fa-fw fa-4x"></i>
              </span>
              <span className="indvLang">
                <i className="fab fa-js-square fa-fw fa-4x"></i>
              </span>
              <span className="indvLang">
                <i className="fab fa-python fa-fw fa-4x"></i>
              </span>
              <span className="indvLang">
                <i className="fab fa-html5 fa-fw fa-4x"></i>
              </span>
              <span className="indvLang">
                <i className="fab fa-css3-alt fa-fw fa-4x"></i>
              </span>
            </div>


            <div className="parallax-small"></div>

          </div>



      </div>
    )
  }
}

export default mainPage;




//to include img, add this between "body" and "blurb" imgContainer

// <div className="imgLangCol">
//   <div className="imgContainer">imgContainer
//     <img className="profileImg" src={pic} alt="sunflower" />
//   </div>
//
// </div>
