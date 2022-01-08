import React, { useState, useEffect } from 'react';
import { AuthContext } from '../provider/auth';
import { Gui } from './styles';

const data = {
  gameOn: false,
  timeout: undefined,
  sounds: [],
  strict: false,
  playerCanPlay: false,
  score: 0,
  gameSequence: [],
  playerSequence: [],
};

export default function GameConsole() {

  const [btnstart, setBtnStart] = useState(false);
  const pressStart = () => {
    setBtnStart(!btnstart)
  }

  const [btnstrict, setBtnStrict] = useState(false);
  const pressStrict = () => { setBtnStrict(!btnstrict) }

  const { toggleswitch, setToogleSwitch } = React.useContext(AuthContext);

  const mudarSwitch = () => {
    if (toggleswitch === false) {
      setBtnStrict(false);
      setBtnStart(false);
    }
    setToogleSwitch(!toggleswitch);
  }
  
  return (
    <div className="game__otions">
      <h1 className="game__title">Genius</h1>
      <Gui>
        <div className="group">
          <div className={toggleswitch === false ? 'gui__counter'  : 'gui__counter gui__counter--on'}>
            {btnstart === false ? '--' : data.score} </div>
          <p className="gui__label">Count</p>
        </div>

        <div className="group">
          {toggleswitch === false
            ? <div className='gui__led'></div>
            : <div className={btnstart === false ? 'gui__led' : 'gui__led gui__led--active'} ></div>
          }
          <div className='gui__btn gui__btn--start' onClick={toggleswitch === true && pressStart}></div>
          <p className="gui__label">Start</p>
        </div>

        <div className="group">
          {toggleswitch === false
            ? <div className='gui__led'></div>
            : <div className={btnstrict === false ? 'gui__led' : 'gui__led gui__led--active'} ></div>
          }
          <div className="gui__btn gui__btn--strict" onClick={toggleswitch === true && pressStrict}></div>
          <p className="gui__label">Strict</p>
        </div>

        <div className="group group-large">
          <p className="gui__label gui__label--switch">ON</p>
          <div className={toggleswitch === false ? 'gui__btn-switch' : 'gui__btn-switch gui__btn-switch--on'} onClick={mudarSwitch}></div>
          <p className="gui__label gui__label--switch">OFF</p>
        </div>
      </Gui>
    </div>
  );
}
