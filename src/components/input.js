import React from "react"

const Input = props => {
  return (
    <div>
      <label>{props.label}</label>
      <input value={props.value} onChange={props.handleChange} />
    </div>
  )
}

export default Input
