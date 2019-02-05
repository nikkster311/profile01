import React from 'react';
import './fontawesome-free-5.7.0-web/js/all'
import pic from "./IMG_3491.JPG"
// import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC|Alice|Allura|Amita|Architects+Daughter|Carrois+Gothic+SC|Caveat|Charm|Cormorant+SC|Dynalight|Euphoria+Script|Gochi+Hand|Gruppo|Habibi|Handlee|IM+Fell+DW+Pica+SC|IM+Fell+French+Canon+SC|IM+Fell+Great+Primer|Julius+Sans+One|Kaushan+Script|La+Belle+Aurore|Megrim|Mr+Dafoe|Over+the+Rainbow|Overlock+SC|Patrick+Hand+SC|Poiret+One|Rock+Salt|Sacramento|Sofia|Spectral+SC|Spinnaker|Syncopate|Thasadith|Zeyada');

class ProjectsPage extends React.Component {

  render() {
    return (
      <div className="wholeBodyContainer">
        <div className="body">

        <section class="parallax"><p>Projects</p></section>

        <div class="projects">
          <div class="project-boxes">Equanimity Podcast Website<br/>
          <img src={pic} width="250" height="200" alt="screenshot of equanimity cast website"/></div>
          <div class="project-boxes">Moon calendar<br/>
          <img src={pic} width="250" height="200" alt="picture of darn in the desert"/></div>
          <div class="project-boxes">Recipe Finder<br/>
          <img src={pic} width="250" height="200" alt="picture of a mushroom"/></div>
          <div class="project-boxes">Packing App<br/>
          <img src={pic} width="250" height="200" alt="sandy ground with a river flowing in the background and beyond that, a cliff face. the photographer's leg is visible and bent, and shoes and hiking socks lie amongst the sand."/></div>
          <div class="project-boxes">tic tac toe<br/><img src={pic} width="250" height="200" alt="picture of blue fabric roses in a store window"/></div>
          <div class="project-boxes">mad libs<br/>
          <img src={pic} width="250" height="200" alt="shells and peices of broken porcelen lie on the beach with mountains in the background"/></div>
          <div class="project-boxes">adventure game<br/>
          <img src={pic} width="250" height="200" alt="stalactites and stalagmites decorate the ceiling and floor of this tannish white cave."/></div>
          <div class="project-boxes">card dealer<br/>
          <img src={pic} width="250" height="200" alt="a pot of tea, a mug, and a handwritten letter sit on a glass table."/></div>
        </div>

        <section class="parallax"></section>



        </div>
      </div>
    )
  }
}

export default ProjectsPage;
