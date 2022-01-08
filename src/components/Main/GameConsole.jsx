/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { AuthContext } from '../provider/auth';
import { Gui } from './styles';
// eslint-disable-next-line no-unused-vars
/*

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

  const _gui = {
    counter: document.querySelector('.gui__counter'),
    switch: document.querySelector('.gui__btn-switch'),
    led: document.querySelector('.gui__led'),
    strict: document.querySelector('.gui__btn--strict'),
    start: document.querySelector('.gui__btn--start'),
    pads: document.querySelectorAll('.game__pad'),
  };

  _gui.switch.addEventListener('click', () => {
    _gui.switch.classList.toggle('gui__btn-switch--on');
  });
*/
// eslint-disable-next-line react-hooks/rules-of-hooks


//gui__btn-switch gui__btn-switch--on
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

const _gui = {
  counter: document.querySelector('.gui__counter'),
  switch: document.querySelector('.gui__btn-switch'),
  led: document.querySelector('.gui__led'),
  strict: document.querySelector('.gui__btn--strict'),
  start: document.querySelector('.gui__btn--start'),
  pads: document.querySelectorAll('.game__pad'),
};

export default function GameConsole() {

  const [btnstart, setBtnStart] = useState(false);
  const pressStart = () => { setBtnStart(!btnstart) }

  const [btnstrict, setBtnStrict] = useState(false);
  const pressStrict = () => {
    setBtnStrict(!btnstrict)
  }

  const { toggleswitch, setToogleSwitch } = React.useContext(AuthContext);

  const mudarSwitch = () => {
    if (toggleswitch === false) {
      setBtnStrict(false);
      setBtnStart(false);
    }
    setToogleSwitch(!toggleswitch);
  }



  // eslint-disable-next-line no-unused-vars
  return (
    <div className="game__otions">
      <h1 className="game__title">Genius</h1>
      <Gui>
        <div className="group">
          <div className={toggleswitch === false ? 'gui__counter' : 'gui__counter gui__counter--on'}>
            {btnstart === false ? '--' : data.score}
          </div>
          <p className="gui__label">Count</p>
        </div>

        <div className="group">
          {toggleswitch === false ? <div className='gui__led'></div>
            : <div className={btnstart === false ? 'gui__led' : 'gui__led gui__led--active'} ></div>
          }
          <div className='gui__btn gui__btn--start' onClick={toggleswitch === true && pressStart}></div>
          <p className="gui__label">Start</p>
        </div>

        <div className="group">
          {toggleswitch === false ? <div className='gui__led'></div>
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
