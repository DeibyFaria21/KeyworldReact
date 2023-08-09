import React from 'react'
import UseCounter from './UseCounter'


const CounterComponent = () => {
    const {count, sumar, restar, reset} = UseCounter(0, 1)
  return (
    <div className='counterComponent'>
        <div className='trioContador'>
          <button onClick={restar}>-</button>
          <div className='cuadroContador'>{count}</div>
          <button onClick={sumar}>+</button>
        </div>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterComponent