import React from 'react';
import Loader from '../status/Loader';
import Error from '../status/Error';
import NeighbourItem from './NeighbourItem';

const Neighbours = ({
  neighbours,
  isLoading,
  error,
  name,
  onSelectCountry,
}) => {
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
          <NeighbourItem
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

export default Neighbours;
