import React from 'react'

const Candidate = ({name,votes,voting}) => {
  return (
    <div>
      <p>{name} : {votes}</p>
      <button onClick={voting(name,1)}>+</button>
      <button onClick={voting(name,-1)}>-</button>
    </div>
  )
}

export default Candidate
