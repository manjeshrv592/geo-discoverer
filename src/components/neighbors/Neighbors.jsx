import React from 'react';
import Loader from '../status/Loader';
import Error from '../status/Error';
import NeighborItem from './NeighborItem';

const Neighbors = ({ neighbours, isLoading, error, name, onSelectCountry }) => {
  return (
    <>
      <small className='mb-tn'>Neighbours ({neighbours.length})</small>
      {isLoading && <Loader className='justify-content-start' />}
      {error && <Error message={error} />}
      {neighbours.length === 0 && !isLoading && (
        <span className='d-block'>{`No neighbours ${name} is a Island`}</span>
      )}
      <div className='neighbours'>
        {neighbours.map(neighbour => (
          <NeighborItem
            key={neighbour.cca3}
            neighbour={neighbour}
            onSelectCountry={onSelectCountry}
            name={name}
          />
        ))}
      </div>
    </>
  );
};

export default Neighbors;
