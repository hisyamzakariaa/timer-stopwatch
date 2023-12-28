import { useEffect, useRef, useState } from "react"

export default function Timer(){
    const [initialTimer, setInitialTimer] = useState('00.00')
    const [isActive, setIsActive] = useState(false)
    const timerInput = useRef()

    function handleReset(){
        setInitialTimer('00.00')
    }

    useEffect(() => {
        let timer
        if (isActive){
            timer = setInterval(() => {
                setInitialTimer(prevState => ((+prevState) - 0.01).toFixed(2))
            },10)
        } else{
            clearInterval(timer)
        }

        return () => {
            clearInterval(timer)
        }
        
    })

    function handleInput(){
        setInitialTimer(timerInput.current.value) 
    }

    function handleStart(){
        setIsActive(prevState => !prevState)
    }


    return( 
        <div>
        <h1>Timer</h1>
        <h3>{initialTimer} sec</h3>
        <input 
            type="number" 
            onChange={handleInput} 
            ref={timerInput} 
        />
        <p>
        <button onClick={handleStart}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
        </p>
        </div>
    )
}