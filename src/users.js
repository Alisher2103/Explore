import React, { Component } from "react";

let users = [
    {id:1,name:'Jack'},
    {id:2,name:'John'},
    {id:3,name:'Janice'},
]
class Students extends Component{
    constructor(props) {
        super(props)
        this.state = {
            students: users,
            name: '',
        }
    }
    render() {
        const onChange = (e) => {
            const { value, name,surname } = e.target
            this.setState({[name]:value,[surname]:value})
        }
        const deleteUser = (id) => {
            const res = this.state.students.filter(student => student.id !== id)
            this.setState({students:res})
        }
        
        const addUser = (name) => {
            const newuser = { id: this.state.students.length + 1, name: name }
            this.setState({students:[...this.state.students ,newuser]})
        }
        
        return (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',background:'yellowGreen',gap:'10px',paddingBottom:'50px'}}>
                <h1>Students</h1>
                {
                    this.state.students.map((student) => (
                        <div key={student.id}>
                            {student.id}-{student.name} - <button onClick={()=>deleteUser(student.id)}>Delete</button>
                        </div>
                    ))
                }
                <input type='text' placeholder="Enter your name" name="name" onChange={onChange } />
                <button style={{background:'blue',height:'30px' ,width:'200px',borderRadius:'10px',border:'none',color:'white'}} onClick={()=>addUser(this.state.name)}>Add user</button>
          </div>    
        )
    }
}

export default Students;