import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import navImg from './assets/logo.png';
import coinImg from './assets/dolar.png';
import AvailablePlayers from './Component/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './Component/SelectedPlayers/SelectedPlayers';
import Nav from './Component/Nav/Nav';
import Banner from './Component/Banner/Banner';
const fetchPlayers = async () => {
  const res = await fetch('/players.json');
  return res.json();
}
const playersPromiser = fetchPlayers();
function App() {
  const [toggle, SetToggle] = useState(true);
  const handleClick = (newState) => {
    SetToggle(newState);
  }
  const [availableBalance, SetAvailableBalance] = useState(60000000);
  const handleCoin = (balance) => {
    if (balance > availableBalance) {
      alert('Amount Not Enough To Buy');
    }
    else {
      const newBalance = availableBalance - balance;
      SetAvailableBalance(newBalance);
    }
  };
  const [selectPlayers, SetSelectPlayers] = useState([]);
  const handleSelectedPlayer = ({ player }) => {
    const newPlayer = [...selectPlayers, player];
    SetSelectPlayers(newPlayer);
  }
  const removePlayer=(p)=>{
    const reaminingPlayer=selectPlayers.filter(ply=>ply.player_name!==p.player_name);
    SetSelectPlayers(reaminingPlayer);
  }

  return (
    <>
      <Nav navImg={navImg} coinImg={coinImg} availableBalance={availableBalance}></Nav>
      <Banner
        handleClick={handleClick}
        toggle={toggle}
        selectPlayers={selectPlayers}
      ></Banner>
      {
        toggle ? <Suspense fallback={<h2>Loading Players</h2>}>
          <AvailablePlayers
            playersPromiser={playersPromiser}
            toggle={toggle}
            handleCoin={handleCoin}
            handleSelectedPlayer={handleSelectedPlayer}
          >
          </AvailablePlayers>
        </Suspense> : <SelectedPlayers
         selectPlayers={selectPlayers} 
         toggle={toggle}
         handleCoin={handleCoin}
         removePlayer={removePlayer}
         ></SelectedPlayers>
      }
    </>
  )
}

export default App
