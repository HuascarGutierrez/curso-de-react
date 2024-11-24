import React from 'react';

const Square = ({children, updateBoard, index, isSelected}) => {

    const handleClick = () => {
      updateBoard(index)
    }
  
    const className = `square ${isSelected?'is-selected':''}`
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
}

export default Square