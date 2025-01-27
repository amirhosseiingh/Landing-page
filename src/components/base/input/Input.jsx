import React from 'react';

export default function Input(props) {
  return (
    <div className="input-box">
      <label className="label-form">{props.label}</label>
      <input
        className="input-form"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
}

