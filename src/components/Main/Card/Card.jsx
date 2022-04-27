import React, { Component } from "react";
import {userContext} from "../../../context/userContext"
import "./Card.css"


class Card extends Component {
  render() {
    return (
      <div id="divCard">
          <userContext.Consumer>
            {({user}) =>
                user?
                  <>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <img src={user.url} alt="img"/>
                    <p>{user.age}</p>
                  </>:""
            }
          </userContext.Consumer>
      </div>
    )
  }
}

export default Card;
