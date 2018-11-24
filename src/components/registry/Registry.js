import React, { Component } from 'react';
import './Registry.css';

class Registry extends Component {
  componentDidMount() {
    let func = (e,t,n) => {
      var s,a = e.getElementsByTagName(t)[0];
      if(e.getElementById(n)){
        var s = e.getElementById(n);
        s.async = !0;
        s.src="https://widget.zola.com/js/widget.js"
        a.parentNode.insertBefore(s,a);
      }else {
        var s = e.createElement(t);
        s.async = !0;
        s.src="https://widget.zola.com/js/widget.js"
        a.parentNode.insertBefore(s,a);
      }
    }

    //stry</a><script>!function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}(document,"script","zola-wjs");</script>

    func(document,"script","zola-wjs")
  }
  render() {
    return (
      <div id="Registry" className="Registry">
        <h1>Registry</h1>
        <a className="zola-registry-embed" href="www.zola.com/registry/julietandcalum" data-registry-key="julietandcalum">Our Zola Wedding Registry</a>

      </div>
    );
  }
}

export default Registry;
