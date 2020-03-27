import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useRouteMatch } from 'react-router-dom';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {

  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const match = useRouteMatch();
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const fetchColors = id => {
    axiosWithAuth().get('/api/colors')
      .then( res => setColorList(res.data))
      .catch( err => console.log('Error from BubblePage get request', err))
  }

  useEffect(() => {
    fetchColors(match.params.id);
  }, [match.params.id]);
  
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
