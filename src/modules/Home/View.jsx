import React, { Component } from "react";

class Home extends Component {
  state = {
    data: [],
    loading: false,
    isError: false
  };

  componentDidMount() {
    this.getPlanets();
  }

  getPlanets = () => {
    this.setState({ ...this.state, loading: true, isError: false });
    fetch("https://swapi.co/api/planets/")
      .then(result =>
        result.json().then(response =>
          this.setState({
            ...this.state,
            data: response.results,
            loading: false
          })
        )
      )
      .catch(error => {
        console.log(error);
        this.setState({ ...this.state, loading: false, isError: true });
      });
  };

  render() {
    console.log(this.state);
    const { loading, data, isError } = this.state;

    return (
      <section>
        Home
        <button onClick={this.getPlanets}>Fetch</button>
        {!loading &&
          data.map(planet => (
            <div key={planet.name}>
              <h1>{planet.name}</h1>
              <h5>{planet.climate}</h5>
              <h5>{planet.diameter}</h5>
              <h5>{planet.population}</h5>
              <h5>{planet.gravity}</h5>
              <h5>{planet.terrain}</h5>
            </div>
          ))}
        {loading && <div>Loading...</div>}
        {isError && <div>Error loading you data, try again.</div>}
      </section>
    );
  }
}

export default Home;
