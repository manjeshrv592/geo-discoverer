import React from 'react';

const NeighbourItem = ({ neighbour, onSelectCountry, name }) => {
  return (
    <span
      title={neighbour.name.common}
      onClick={() => onSelectCountry(neighbour)}
    >
      <img src={neighbour.flags.svg} alt={`${name} flag`} />
    </span>
  );
};

export default NeighbourItem;
