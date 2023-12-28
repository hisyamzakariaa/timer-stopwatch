import { useEffect, useRef, useState } from "react"

export default function Stopwatch(){
    const [initialTimer, setInitialTimer] = useState(0.00)
    const [isActive, setIsActive] = useState(false)
    const timerInput = useRef()

    function handleReset(){
        setInitialTimer(0.00)
        setIsActive(false)
    }

    useEffect(() => {
        let timer
        if (isActive){
            timer = setInterval(() => {
                setInitialTimer(prevState => ((+prevState) + 0.01).toFixed(2))
            },10)
        } else{
            clearInterval(timer)
        }

        return () => {
            clearInterval(timer)
        }
        
    },[isActive])

    function handleInput(){
        setInitialTimer(timerInput.current.value) 
    }

    function handleStart(){
        setIsActive(prevState => !prevState)
    }

    console.log(isActive)
    return( 
        <div>
        <h1>Stopwatch</h1>
        <h3>{initialTimer} sec</h3>
        <input 
            type="number" 
            onChange={handleInput} 
            ref={timerInput} 
            placeholder="Stopwatch value"
        />
        <p>
        <button onClick={handleStart}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
        </p>
        </div>
    )
}