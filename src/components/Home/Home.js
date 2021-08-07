import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Home = () => {
     const [players, setPlayers] = useState([]);
     const [selecPlayer, setSelectPlayer] = useState([]);
     useEffect(() => {
          fetch('https://randomuser.me/api/?results=15')
               .then(res => res.json())
               .then(data => {
                    setPlayers(data.results)
                    // console.log(data.results);
               })
     }, [])

     const handleAddTeam=(name)=>{
         setSelectPlayer([...selecPlayer,name])
     }

     return (
          <div>
               <h1>Total:{players.length}</h1>
               <ul>
                    {
                      selecPlayer.map(p=><li>{p}</li>)   
                    }
               </ul>
               {
                    players.map(x => <Player x={x} handleAddTeam={handleAddTeam}></Player>)
               }
          </div>
     );
};

export default Home;