import React, { useState, useEffect } from "react";
import PlanetCard from "./PlanetCard";

function About() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getPlanets();
  }, []);

  const getPlanets = () => {
    setIsLoading(true);
    setIsError(false);
    fetch("https://swapi.co/api/planets/")
      .then(result =>
        result.json().then(response => {
          setData(response.results);
          setIsLoading(false);
        })
      )
      .catch(error => {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  console.log("data", data);

  return (
    <section>
      About
      <button onClick={getPlanets}>Fetch</button>
      {!isLoading &&
        data.map(planet => {
          return <PlanetCard key={planet.name} data={planet} />;
        })}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error loading you data, try again.</div>}
    </section>
  );
}

export default About;
