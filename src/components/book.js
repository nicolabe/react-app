import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.id);
  }
  render() {
    return <div>Bok</div>;
  }
}

export default Book;
