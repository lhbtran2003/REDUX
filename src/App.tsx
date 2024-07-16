import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { act_increasment_n } from './store/actions'
import { StoreInterface } from './store'
import { actIncreament, actIncreamentByNumber } from './store/actions/countActions'
import { ArrayUser } from './components/ArrayUser'
import { Counter } from './components/Counter'
import { RandomNumber } from './components/RandomNumber'

function App() {
  const arrayUser = useSelector( (store : StoreInterface)=> store.arrayUserStore)


  return (
    <>
      <div className="container mt-3">
        <RandomNumber/>

      </div>
    </>
  );
}

export default App
