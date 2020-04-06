import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  data: PropTypes.object.isRequired
};

function PlanetCard(props) {
  console.log("props from PlanetCard", props);
  const { name, climate, diameter, population, gravity, terrain } = props.data;
  return (
    <div key={name}>
      <h1>{name}</h1>
      <h5>{climate}</h5>
      <h5>{diameter}</h5>
      <h5>{population}</h5>
      <h5>{gravity}</h5>
      <h5>{terrain}</h5>
    </div>
  );
}

PlanetCard.propTypes = propTypes;

export default PlanetCard;
