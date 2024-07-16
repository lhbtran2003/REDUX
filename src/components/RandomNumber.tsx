import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store, StoreInterface } from '../store'
import { getRandomNumber } from '../store/actions/randomNumberAction'

export const RandomNumber = () => {
    const number = useSelector((store: StoreInterface) => store.randomNumberStore)
    const dispatch =  useDispatch()
const handlerGetRandomNumber = () =>{
    dispatch(getRandomNumber())
}

  return (
    
    <div>
        {number}
        <button onClick={handlerGetRandomNumber}>Generate Random Number</button>
    </div>
  )
}
