import React from 'react';

export function counter(){
  const [count, setCount] = React.useState(0)

  return (
    <div>
    <button onClick={()=> setCount((prevState)=> prevState - 1)}>-</button>
     {count}
    <button onClick={()=> setCount((prevState)=> prevState + 1)}>+</button>
    </div>
  )
}

export default Counter;
