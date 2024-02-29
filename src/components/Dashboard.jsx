import React from 'react'
import '../App.css'
import Student from './Student'

export default function Dashboard({students}) {
  return (
    <div className='dashboard-container'>
        <h3>Students List</h3>
        <table >
            <thead>
                <tr style={{backgroundColor:"grey"}}>
                    <th>Name</th>
                    <th>Age</th>
                    <th>averageGrade</th>
                </tr>
            </thead>
            <tbody>
            {
                students.map((student)=>(
                  <Student key={student.id} student={student}/>
                ))
            }    
            </tbody>
        </table>
    </div>
  )
}
