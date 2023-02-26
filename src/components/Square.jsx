import React from 'react'
import { useState } from 'react'

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="square"
      style={{ color: 'black' }}
    >
      {value}
    </button>
  )
}

export default Square
