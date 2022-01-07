import React from 'react';
import { Console, Gui } from './styles';

export default function GameConsole() {
  return (
    <div className="game__otions">
      <h1 className="game__title">Genius</h1>
      <Gui>
        <div className="group">
          <div className="gui__counter">--</div>
          <p className="gui__label">Count</p>
        </div>

        <div className="group">
          <div className="gui__led"></div>
          <div className="gui__btn gui__btn--start"></div>
          <p className="gui__label">Start</p>
        </div>

        <div className="group">
          <div className="gui__led"></div>
          <div className="gui__btn gui__btn--strict"></div>
          <p className="gui__label">Strict</p>
        </div>

        <div className="group group-large">
          <p className="gui__label gui__label--switch">ON</p>
          <div className="gui__btn-switch"></div>
          <p className="gui__label gui__label--switch">OFF</p>
        </div>
      </Gui>
    </div>
  );
}
