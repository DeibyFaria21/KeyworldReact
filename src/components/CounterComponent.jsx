import React from 'react'
import UseCounter from './UseCounter'


const CounterComponent = () => {
    const {count, sumar, restar, reset} = UseCounter(0, 1)
  return (
    <div className='counterComponent'>
        <div>Contador: Hola! {count}</div>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={restar}>-</button>
    </div>
  )
}

export default CounterComponent