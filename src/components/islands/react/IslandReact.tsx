import { useState } from 'react'

interface Props {
  initValue?: number
  children?: JSX.Element
}

export const IslandReact: React.FC<Props> = ({initValue=27, children}) => {
  const [counter, setCounter] = useState<number>(initValue)

  const handleOnClick = (value:number) => {
    console.log(counter)
    setCounter((prev) => prev + value)
  }

  return (
    <section className='mt-3'>

      {children}
      
      <div className='mt-3'>Counter: {counter}</div>

      <div className='flex gap-3 mt-3'>
        <button className='bg-blue-700 text-gray-100 px-7 py-1' onClick={()=>handleOnClick(-1)}>-1</button>
        <button className='bg-blue-700 text-gray-100 px-7 py-1' onClick={()=>handleOnClick(+1)}>+1</button>
      </div>
    </section>
  )
}
