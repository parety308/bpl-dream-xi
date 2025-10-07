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
function App() {
  const playersPromiser = fetchPlayers();
  const [toggle, SetToggle] = useState(true);
  const handleClick = (newState) => {
    SetToggle(newState);
  }
  return (
    <>
      <Nav navImg={navImg} coinImg={coinImg}></Nav>
      <Banner
        handleClick={handleClick}
      ></Banner>
      {
        toggle? <Suspense fallback={<h2>Loading Players</h2>}>
          <AvailablePlayers playersPromiser={playersPromiser}>
          </AvailablePlayers>
        </Suspense> : <SelectedPlayers></SelectedPlayers>
      }
    </>
  )
}

export default App
