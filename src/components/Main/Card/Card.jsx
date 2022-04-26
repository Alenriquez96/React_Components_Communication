import React, { Component } from "react";
import {userContext} from "../../../context/userContext"


class Card extends Component {
  render() {
    return (
      <div>
          <userContext.Consumer>
            {({user}) =>
                user?
                  <>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.url}</p>
                    <p>{user.age}</p>
                  </>:""
            }
          </userContext.Consumer>
      </div>
    )
  }
}

export default Card;
