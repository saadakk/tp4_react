import React, { useState } from 'react'

export default function Carray() {



const[loisirs,setLoisirs]=useState([

{nom:'Fullstack',group:'203'},
{nom:'Security',group:'204'},
{nom:'Cloud',group:'205'}



])

  return (
    <div>
        <h1>Liste des filieres:</h1>
      <ul>
            {

   loisirs.map((el,ind)=>{

    return <li key={ind}>{el.nom}</li>

   })


            }

</ul>



<h1>Tableau des filieres:</h1>
      <table>
                    <thead>
                     <tr>
                            <th style={{ border: '1px solid #000' }}>Nom</th>
                            <th style={{ border: '1px solid #000' }}>groupe</th>
                   
                     </tr>
                     </thead>
                     <tbody>
            {

   loisirs.map((el,ind)=>{

    return <tr key={ind}>
        <td style={{ border: '1px solid #000' }}>{el.nom}</td>
        <td style={{ border: '1px solid #000' }}>{el.group}</td>
            </tr>

   })


            }
</tbody>
</table>


    </div>
  )
}
