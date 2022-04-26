import React, { Component } from "react";
import Form from "./Form"
import Card from "./Card"
import "./Main.css"

class Main extends Component {
  render() {
    return(
      <div className="divMain">
        <Form/>
        <Card/>
      </div>
    ) 
  }
}

export default Main;
