import React from 'react'

const PrimaryButton = (props) => {

    const primaryButtonStyle= {
        padding:"10px 30px",
        borderRadius:"50px",
        background:"var(--primary-green)",
        border:"none",
        boxShadow: "0 2px 0px var(--shadow-green)",
        color:"white",
        fontWeight:"500",
        
    }
  return (
    <>
      <button style={primaryButtonStyle}>
        {props.buttonName}
      </button>
    </>
  )
}

export default PrimaryButton
