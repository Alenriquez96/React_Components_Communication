import React, { Component } from "react";
import {userContext} from "../../context/userContext"

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <h1>Formulario componentes</h1>
        </div>
        <div>
          <userContext.Consumer>
            {({user}) =>
                user?
                  <>
                    <p>Hola, {user.email}</p>
                  </>:""
            }
          </userContext.Consumer>
        </div>
        </header>
    )
  }
}

export default Header;
