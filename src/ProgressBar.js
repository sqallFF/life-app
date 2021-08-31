import React, {useState} from 'react'
import styled from 'styled-components'

const ProgressBar = ({count}) => {
   const width = 300
   const percent = count/5
   const CompletionPercent = count *20
  const progress = percent * width
    let containerStyles = {
      height: 20,
      width: width,
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      marginLeft: 100
    }
  
    let fillerStyles = {
        width: `${progress}px`,
      height: '100%',
      backgroundColor:  "rgb(62, 122, 235)",
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{CompletionPercent}%</span>
        </div>
      </div>
    );
  };

export default ProgressBar
