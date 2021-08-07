import React, { useState } from 'react';

const Player = (props) => {
     // console.log(props)
     const { name, picture, email,phone } = props.x;
     const fullName = `${name.title} ${name.first} ${name.last}`
     const image = picture.large;
     const [cellPhone,setCellPhone]=useState('')
     const handleAddTeam=props.handleAddTeam;
     const divStyle = {
          border: "2px solid red",
          margin: "10px",
          borderRadius: "10px",
          padding: "10px",
          display: "flex",
          width: "40%"

     }

     const displayPhone=()=>setCellPhone(phone)

     return (
          <div style={divStyle}>
                    <div style={{ marginTop: "25px" }}>
                         <img src={image} alt="" />
                    </div>
               <div style={{ marginLeft: "20px" }}>
                    <h1>{fullName}</h1>
                    <p>Email:{email}</p>
                    <p>Phone:{ cellPhone}</p>
                    <button onClick={displayPhone}>Show phone</button>
                    <button onClick={()=>handleAddTeam(fullName)}>Add me on team</button>
                  
               </div>
          </div>
     );
};

export default Player;