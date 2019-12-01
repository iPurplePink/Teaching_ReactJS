import React, { Component } from "react";

class Home extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.getPlanents();
  }

  getPlanents = async () => {
    await fetch("https://swapi.co/api/planets/")
      .then(result =>
        result
          .json()
          .then(response => this.setState({ data: response.results }))
      )
      .catch(error => console.log("error", error));
  };

  render() {
    return (
      <section>
        Home
        {/* <h1>{this.state.data.length} Star Wars Planets</h1> */}
        {/* <div className="films-container">
          {this.state.data.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>{`Climate: ${item.climate}`}</p>
              <p>{`Diameter: ${item.diameter}`}</p>
              <p>{`Population: ${item.population}`}</p>
              <p>{`Terrain: ${item.terrain}`}</p> */}
        {/* </div>
          ))}
        </div> */}
      </section>
    );
  }
}

export default Home;
