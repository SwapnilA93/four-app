import React from "react";
import axios from "axios";

class Data extends React.Component {
  state = {
    person: [],
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const person = res.data;
      this.setState({ person });
    });
  }

  render() {
    return (
      <ul>
        {this.state.person.map((person) => (
          <li key={person.id}>{person.name}
          <br></br>{person.email}
          <br></br>{person.phone}</li>
        ))}
      </ul>
    );
  }
}

export default Data;
