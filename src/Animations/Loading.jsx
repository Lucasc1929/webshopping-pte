import React from 'react'
import "../Styles/LoadingAnimation.css";


export default function LoadingAnimation() {
  return (
    <div className='lds-ellipsis'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

