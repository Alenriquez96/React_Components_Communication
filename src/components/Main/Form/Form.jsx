import React, { Component } from "react";
import {userContext} from "../../../context/userContext"
import "./Form.css"

class Form extends Component {
  static contextType = userContext;
  constructor(props) {
    super(props)
  
    this.state = {
      name: "",
      email: "",
      url: "",
      age:""
    }
  }


  login = (e) => {
    e.preventDefault();
    const name=e.target.name.value
    const email=e.target.email.value
    const url=e.target.url.value
    const age=e.target.age.value
    const user = {name,email,url,age}
    this.setState({
      name:user.name,
      email:user.email,
      url:user.url,
      age:user.age
    });
    const loginUser = this.context.login//Leer la función login
    loginUser(user)
  }

  paint = (e)=>{
    const name=e.target.name.value
    const email=e.target.email.value
    const url=e.target.url.value
    const age=e.target.age.value
    const user = {name,email,url,age}
    const paintUser = this.context.paint
    paintUser(user)
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" /> 
        <label htmlFor="url">Url</label>
        <input type="text" name="url" id="url" />
        <label htmlFor="age">Edad</label>
        <input type="text" name="age" id="age" />
        <input type="submit" value="Enviar" />      
      </form>
    )
  }
}

export default Form;
