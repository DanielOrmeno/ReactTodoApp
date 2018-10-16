import React from "react";

//Function to create the input field for users to enter their todo:
function Input(props) { 
    const container = {
        width: '50%',
        margin: '0 auto'
    }
    const form = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        backgroundColor: '#3498DB',
        alignItems: 'center'
    }
    const todoLabel = {
        fontSize: '1.7rem',
        color: 'white',
        width: '100px',
        marginRight: '30px',
        marginLeft: '50px',
        fontWeight: '200'
    }
    const todoField = {
        width: '120%',
        padding: '1em',
        border: 'none',
        backgroundColor: '#3498DB'
    }
    const button = {
        marginLeft: '90px',
        backgroundColor: '#34495E',
        color: 'white'
    }
    return (
      <div style = {container}>
        <form style = {form}>
          <div>
            <label style = {todoLabel}>{props.title}</label>
          </div>
          <div>
            <input style = {todoField} id= {props.id} type = {props.type}  />
          </div>
          <div>
            <button style = {button} className="btn">{props.buttonText}</button>
          </div>
        </form>
      </div>
    )
  }



export default Input;