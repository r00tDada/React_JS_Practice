import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount =0
    const [count,setState] = useState(0)
    const incrementfive = ()=>{
        for(let i=0;i<5;i++){
            setState(prevCount => prevCount+1)
        }
    }
  return (
    <div>
        Count : {count}
        <button onClick={()=>setState(initialCount)}>Reset</button>
        <button onClick={()=>setState(prevCount => prevCount+1)}>Increment</button>
        <button onClick={()=>setState(prevCount => prevCount-1)}>Decrement</button>
        <button onClick={incrementfive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo