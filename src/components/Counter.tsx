import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actIncreament, actIncreamentByNumber } from '../store/actions/countActions';
import { StoreInterface } from '../store';

export const Counter = () => {

  const count = useSelector((store: StoreInterface) => store.countStore);  
  const dispatch = useDispatch();
  const handleIncreament = ()=>{
    dispatch(actIncreament())
  }

  const handleIncreamentByNumber = ()=>{
    dispatch(actIncreamentByNumber(10));
  }

  return (
    <div>
      {count}
        <button onClick={handleIncreament}>+1</button>
        <button onClick={handleIncreamentByNumber}>+10</button>
    </div>
  );
}
