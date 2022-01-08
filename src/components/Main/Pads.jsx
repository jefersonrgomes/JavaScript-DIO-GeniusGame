/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
import { AuthContext } from '../provider/auth';
import GameConsole from './GameConsole';
//import GameConsole from '../../assets/audios';
import {
  PadTopLeft,
  PadTopRight,
  PadBottonLeft,
  PadBottonRight,
  PadButton,
} from './styles';

export default function Pads() {

  const { toggleswitch, setToogleSwitch } = React.useContext(AuthContext);

  const [padgreen, setPadGreen] = useState(false);
  const pressPadGreen = () => {
    setPadGreen(!padgreen)
    padGreenSound.play();

    setTimeout(
      () => {
        setPadGreen(false)
      }, 500)
  }

  const [padred, setPadRed] = useState(false);
  const pressPadRed = () => {
    setPadRed(!padred)
    setTimeout(
      () => {
        setPadRed(false)
      }, 500)
  }

  const [padyellow, setPadYellow] = useState(false);
  const pressPadYellow = () => {
    setPadYellow(!padyellow)
    setTimeout(
      () => {
        setPadYellow(false)
      }, 500)
  }

  const [padblue, setPadBlue] = useState(false);
  const pressPadBlue = () => {
    setPadBlue(!padblue)
    setTimeout(
      () => {
        setPadBlue(false)
      }, 500)
  }

  const padGreenSound = new Audio('../../assets/audios/simonSound1.mp3');
  const padRedSound = new Audio('../../assets/audios/simonSound2.mp3');
  const padYellowSound = new Audio('../../assets/audios/simonSound3.mp3');
  const padBlueSound = new Audio('../../assets/audios/simonSound4.mp3');

  /*
   { if(toggleswitch === false ){
        <PadTopLeft className='game__pad game__pad--tl'></PadTopLeft>
        <PadTopRight className='game__pad game__pad--tr'></PadTopRight>
        <PadBottonLeft className='game__pad game__pad--bl'></PadBottonLeft>
        <PadBottonRight className='game__pad game__pad--br'></PadBottonRight>
      }
      else{
        <PadTopLeft className={padgreen === false ? 'game__pad game__pad--tl' : 'game__pad game__pad--tl game__pad--active'} onClick={toggleswitch === true && pressPadGreen}></PadTopLeft>
        
        <PadTopRight className={padred === false ? 'game__pad game__pad--tr' : 'game__pad game__pad--tr game__pad--active'} onClick={toggleswitch === true && pressPadRed}></PadTopRight>

      <PadBottonLeft className={padyellow === false ? 'game__pad game__pad--bl' : 'game__pad game__pad--bl game__pad--active'} onClick={toggleswitch === true && pressPadYellow}></PadBottonLeft>

      <PadBottonRight className={padblue === false ? 'game__pad game__pad--br' : 'game__pad game__pad--br game__pad--active'} onClick={toggleswitch === true && pressPadBlue}></PadBottonRight>
      }}
  */


  return (
    <PadButton>
      {toggleswitch === false ? <PadTopLeft className={'game__pad game__pad--tl'}></PadTopLeft>
        : <PadTopLeft className={padgreen === false
          ? 'game__pad game__pad--tl' 
          : 'game__pad game__pad--tl game__pad--active'}
          onClick={toggleswitch === true && pressPadGreen}></PadTopLeft>
      }



      <PadTopRight className={padred === false ? 'game__pad game__pad--tr' : 'game__pad game__pad--tr game__pad--active'} onClick={toggleswitch === true && pressPadRed}></PadTopRight>

      <PadBottonLeft className={padyellow === false ? 'game__pad game__pad--bl' : 'game__pad game__pad--bl game__pad--active'} onClick={toggleswitch === true && pressPadYellow}></PadBottonLeft>

      <PadBottonRight className={padblue === false ? 'game__pad game__pad--br' : 'game__pad game__pad--br game__pad--active'} onClick={toggleswitch === true && pressPadBlue}></PadBottonRight>

      <GameConsole />
    </PadButton>
  );
}
