import React from 'react';
import './ButtonRefresh.css'

// Component pic return an image

const ButtonRefresh = (props) => (
  <button
    className = "ButtonRefresh"
    onClick = {() => props.refresh()}
  > Refresh the Drawer board </button>
);

export default ButtonRefresh;