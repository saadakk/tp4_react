import React from 'react'
import { useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'
export default function Todolist() {
  const [array,setArray] = useState([])
  const [pages, setPages]= useState(1)

  useEffect(()=>{ 
    axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${10} &_page=${pages}`).
    then(res => {return res.data}).
    then(data => setArray(data))
  }
  ,[pages])

  {console.log(array)}
  return (
    <div>
      {array.map((item)=>{
        
        return(
          
          <li>user id :{item.id} title: {item.title}</li>
          
        )
       
      }
      )
} 
      <input type='text' value='next' />
    </div>
  )
}
