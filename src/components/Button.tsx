'use client';
import React from 'react'

interface ButtonProps {
  text: string;
}

export default function Button(props: ButtonProps){
  return (
    <button  style={buttonStyle}>
      {props.text}
    </button>
  );
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  color: '#ADCA87',
  borderColor: '#ADCA87',
  border: 'solid 2px',
  borderRadius: '30px',
  cursor: 'pointer',
  height: '60px',
  minWidth: '250px',
  fontWeight: '500',
  fontSize: '20px',
  marginTop: '35px',
};

