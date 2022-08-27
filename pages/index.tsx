import type { NextPage } from 'next'
import Head from 'next/head'
import { useDispatch, useSelector } from '../store/store'
import { setCounter } from '../store/slices/counterSlice'


const Home: NextPage = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  
  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(setCounter({counter: counter + 2}))
  }

  return (
    <div>
      <Head>
        <title>Illusion</title>
        <meta name="description" content="luminate the way you draw" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-3xl text-danger">Here</p>
      <button onClick={handleClick}>
        Click
      </button>
      <p>{counter}</p>
    </div>
  )
}

export default Home
