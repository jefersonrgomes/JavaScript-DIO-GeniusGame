import React from 'react'
import GameConsole from './GameConsole';
  import {
  PadTopLeft,
  PadTopRight,
  PadBottonLeft,
  PadBottonRight,
  PadButton,
} from './styles';

export default function Pads() {
    return (
    <PadButton>
      <PadTopLeft className="game__pad game__pad--tl game__pad--active"></PadTopLeft>
      <PadTopRight className="game__pad game__pad--tr"></PadTopRight>
      <PadBottonLeft className="game__pad game__pad--bl"></PadBottonLeft>
      <PadBottonRight className="game__pad game__pad--br"></PadBottonRight>

      <GameConsole />
    </PadButton>
);
}
