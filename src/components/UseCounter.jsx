import {useState} from 'react'

const UseCounter = (valorOriginal = 0, tab = 1) => {
    const [count, setCount] = useState(valorOriginal)

    const sumar = () => {
        setCount((valorPrevio) => valorPrevio + tab)
    }

    const restar = () => {
        if (count > 0) setCount((valorPrevio) => valorPrevio - tab)
    }

    const reset = () => {
        setCount(valorOriginal)
    }

  return {
    count, sumar, restar, reset
  }
}

export default UseCounter