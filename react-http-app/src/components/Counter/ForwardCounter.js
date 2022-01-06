import React, { useEffect, useState } from 'react';
import useCounter from '../../hooks/counter-hook';

const ForwardCounter = (props) => {
   const counter = useCounter();
   return <div>{counter}</div>;
};
export default ForwardCounter;
