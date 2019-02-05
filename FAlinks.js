import React from 'react';
import './fontawesome-free-5.7.0-web/js/all'

const hrefOptions = {
  "twitter": "https://nikkstertakesontech.wordpress.com/",
  "wordpress": "https://twitter.com/nikksterDotTech"
}

class FAlinks extends Component {
constructor(props) {
  super(props);
  this.state = {
    linkHref: "",
    icon: "",
    brand: true,
  }

"<a id=\"" + {props.icon} + "\" href=\"" + {props.linkHref} + " onClick={this.onClick}> \n
  <i className=" fab fa-twitter"></i>
</a>


  <a id="twitter" href="https://twitter.com/nikksterDotTech" onClick={this.onClick}>
    <i className="fab fa-twitter"></i>
  </a>
}



export default FAlinks
