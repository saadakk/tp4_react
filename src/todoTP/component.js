import React, {useState} from 'react'

export default function Todo() {
    const [todo,settodo] = useState([
        {txt:'film', completed:false},
        {txt:'foot', completed:false},
        {txt:'basket', completed:false}
    ])

    const [nom,setnom] = useState("")

    const modifytask = (e)=>{
        setnom(e.target.value)
        
    }

    const ajouter = ()=>{
        let newarr = [...todo]
        newarr.push({txt:nom,completed:false})
        settodo(newarr)
        setnom("")
        console.log(todo)
    }

    const supprimer = (x)=>{
        todo.splice(x,1)
        let newTbale=[...todo]
        settodo(newTbale)
    }

    const completelist = (x)=>{
        let table =[...todo];
        table[x].completed=!table[x].completed;
        settodo(table);
    }

  return (
    <div>
        <input type='text' value={nom} onChange={(e)=>modifytask(e)}/>
        <input type='button'value='ajouter' onClick={ajouter}/>
        {todo.map((element,x)=>{
                let pstyle =  element.completed ? {textDecorationLine:"line-through"} : {textDecorationLine:"none"};
                return (<li key={x} id={x}><p style={pstyle}>{element.txt}</p><input type='button' onClick={()=>supprimer(x)} value="supprimer"/>
                <input type='button' value="toggle" onClick={()=>completelist(x)}/></li>)
            })
        }
    </div>
  )
}
