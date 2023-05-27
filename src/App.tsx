import React, { useCallback, useState } from 'react';
import Button from './components/button';

function App (){
  const [ count, setCount ] = useState(0);

  // useCallback:
  // is a React Hook that lets you cache a function definition between re-renders.
  const counterCallBack = useCallback(()=>setCount(count => count+1),[])

  return(
    <div>
      <p>{count}</p>
      <Button onClick={counterCallBack}>
        Increment
      </Button>
    </div>
  )
}

export default App;
