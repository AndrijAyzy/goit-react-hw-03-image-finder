import { RotatingSquare } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';
import Loader from './components/Loader/Loader';
import React from 'react';

const Loader = () => {
  return (
    <LoaderDiv>
      <RotatingSquare
        ariaLabel="rotating-square"
        visible={true}
        color="grey"
        strokeWidth="10"
      />
    </LoaderDiv>
  );
};

export default Loader;
