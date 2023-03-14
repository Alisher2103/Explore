import React, { Component } from "react";

class Task extends Component{
    constructor(props) {
        super(props)
        this.state = {
            option: '0%',
            with:''
        }
    }
    render() {
        const onChange = (e) => {
            const { value, option } = e.target
            this.setState({option:value})
            
        }
        return (
                <div style={{background:'yellowGreen',display:'flex',flexDirection:'column',alignItems:'center'}}>
                
                    <h1>Create figures</h1>
            <div style={{display:'flex',gap:'15px',background:'yellowGreen',height:'100px',alignItems:'center',justifyContent:'center'}}>
                <div>
                <label for=''>Div shakli:  </label>
                <input type='text'onChange={onChange} />    
                </div>
                <div>
                <label for=''>Div rangi:  </label>
                <input type='text' />    
                </div>
                <div>
                <label for=''>Div widthi:  </label>
                <input type='text' />    
                </div>
                <div>
                <label for=''>Div heighti:  </label>
                <input type='text' />    
                </div>
                <button>Create</button>
                
            </div>
                </div>
        )
    }
}
export default Task;