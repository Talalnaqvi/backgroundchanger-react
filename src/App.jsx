import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    {/* <div className="w-f  bg-blue-500" > d</div> */}
    <div className="w-screen bg-blue-500 -ml-12 h-screen -mt-8  " style={{backgroundColor:color}}
   >
      {/* in this above line we inject color variable into style but dont use {color} beacause we are inside {{}} already
      and other thing we learned that how we inject inline css in jsx */}





    <div className="fixed bg-green-500 w-screen bottom-12 min-h-16 flex justify-around align-center justify-center items-center ml-0">



      <button style={{backgroundColor:"red"}}  onClick={()=>
      setColor("red")
    }> Red</button>


      <button style={{backgroundColor:"blue"}}  onClick={()=>
      setColor("blue")
    }> Blue </button>


      <button style={{backgroundColor:"green"}}  onClick={()=>
      setColor("green")
    }> Green</button>
    

    <button style={{backgroundColor:"black"}}   onClick={()=>
      setColor("black")
    }>Black</button>

    <button style={{backgroundColor:"yellow"}}  onClick={()=>
      setColor("yellow")
    }>Yellow</button>
    </div>
    </div>
    </>
  )
}

export default App
