import React from "react";


//Function to create the header with the react image and app name:
function Header(props){

    const centerImg = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: '1em'
    };
    const Img = {
        width: '80px',
        height: '80px'
    };
    const centerHeader = {
        textAlign: 'center',
        color: 'white',
        fontWeight: '200',
        paddingBottom: '.5em'
    };
    
    return (
        <div>
            <div>
                <div style = {centerImg}>
                <img style = {Img} src={props.src} />
                </div>
                <div>
                <h1 style = {centerHeader}>{props.title}</h1>
                </div>
            </div>
        </div>
    )
  }



export default Header;