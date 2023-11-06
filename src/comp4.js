import React,{useState} from 'react'

export default function Comp4(props) {
    
    const [counter,setcounter] = useState(10)

    const inc= ()=>{
        let c = counter
        c++
        setcounter(c)
    }

    const dec= ()=>{
        let c = counter
        c--
        setcounter(c)
    }

    const fchild=(p)=>{
        alert("sss"+p)
    }
  return (
    <div>
        <h1 style={{color:'red'}}   onClick={()=>fchild(10)}>{props.gr}</h1>
        <h2 onClick={props.fparent}>test</h2>
        <button className='btn btn-warning'>coocococ</button><br/>
        <input type='button' value='+' onClick={()=>inc()}/>
        <p>la valeur est {counter}</p>
        <input type='button' value='-' onClick={()=>dec()}/>
    </div>
  )
}
