import React, { Component } from "react";
import Authentication from "./Authentication";

import Posts from "./Posts";

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication />
        <Posts />
      </main>
    );
  }
}

export default Application;

// {
//   id: "1",
//   title: "A Very Hot Take",
//   content:
//     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!",
//   user: {
//     uid: "123",
//     displayName: "Bill Murray",
//     email: "billmurray@mailinator.com",
//     photoURL: "https://www.fillmurray.com/300/300"
//   },
//   stars: 1,
//   comments: 47
// },
// {
//   id: "2",
//   title: "The Sauciest of Opinions",
//   content:
//     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!",
//   user: {
//     uid: "456",
//     displayName: "Mill Burray",
//     email: "notbillmurray@mailinator.com",
//     photoURL: "https://www.fillmurray.com/400/400"
//   },
//   stars: 3,
//   comments: 0
// }
