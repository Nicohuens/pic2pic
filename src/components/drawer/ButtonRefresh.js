import React from 'react';
import './ButtonRefresh.css'

// Component pic return an image

const ButtonRefresh = (props) => (
  <button
    id = "ButRefresh"
    className = "ButtonRefresh"
    onClick = {() => props.refresh()}
  > <span>🗑️</span> </button>
);

export default ButtonRefresh;
