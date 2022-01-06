import React, { useState, useEffect } from 'react';
import useCounter from '../../hooks/counter-hook';

const BackwardCounter = (props) => {
   const counter = useCounter(false);
   return <div>{counter}</div>;
};
export default BackwardCounter;
