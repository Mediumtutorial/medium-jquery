import React, { Component } from 'react'
import $ from 'jquery'

export default class App extends Component {
  jQuerycode = () => {
    $(".button").click(function(){
     $('p').css('color', 'red')
    
    });
  }
  componentDidMount(){
    this.jQuerycode()
  }
  render() {
    return (
      <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci vel voluptates sit voluptas illum eveniet consectetur corrupti suscipit nesciunt et, inventore velit quaerat ex deleniti ut facere, voluptate ab? Ducimus.</p>
        <button className="button">Click here</button>
      </div>
    )
  }
}
