/*** *** *** *** ***/
/*    ATRIBUTES    */
/*** *** *** *** ***/


const _levels = {
	ease: 750,
	normal: 550,
	hard: 350,
	veryhard:250,
	terminador: 150
}

let countLevel = 0;
let selectedLevel = _levels.ease;
let timerLevel = 10000;

const _data = {
	gameOn: false,
	timeout: undefined,
	sounds: [],
	effects: [],
	strict: false,
	playerCanPlay: false,
	score: 0,
	gameSequence: [],
	playerSequence: []
};

const _gui = {
	counter: document.querySelector(".gui__counter"),
	switch: document.querySelector(".gui__btn--switch"),
	led: document.querySelector(".gui__led--level"),
	strict: document.querySelector(".gui__btn--strict"),
	level: document.querySelector(".gui__btn--level"),
	start: document.querySelector(".gui__btn--start"),
	pads: document.querySelectorAll(".game__pad")
}

const _soundUrls = [
	"../assets/audios/simonSound1.mp3",
	"../assets/audios/simonSound2.mp3",
	"../assets/audios/simonSound3.mp3",
	"../assets/audios/simonSound4.mp3"
];

_soundUrls.forEach(sndPath => {
	const audio = new Audio(sndPath);
	_data.sounds.push(audio);
});

const _effectsUrls = [
	"../assets/audios/effects/start.wav",
	"../assets/audios/effects/strict.wav",
	"../assets/audios/effects/congratulations.wav",
	"../assets/audios/effects/nextlevel.wav "
]

_effectsUrls.forEach(sndPath => {
	const audio = new Audio(sndPath);
	_data.effects.push(audio);
})

_gui.switch.addEventListener("click", () => {
	_data.gameOn = _gui.switch.classList.toggle("gui__btn--switch--on");
	_gui.counter.classList.toggle("gui__counter--on");
	_gui.counter.innerHTML = "--";
	_data.strict = false;
	_data.playerCanPlay = false;
	_data.score = 0;
	_data.gameSequence = [];
	_data.playerSequence = [];
	disablePads();
	_gui.led.classList.remove("gui__led--active");

	if (!_data.gameOn) return;
	else _data.effects[2].play();

});

_gui.strict.addEventListener("click", () => {
	if (!_data.gameOn) return;
	_data.strict = _gui.led.classList.toggle("gui__led--active");
	_data.effects[1].play();
});

_gui.start.addEventListener("click", () => {
	if (!_data.gameOn) return;
	startGame();
	console.log('clicado start')
});

_gui.level.addEventListener("click", () => {
	if (!_data.gameOn) return;
	_data.effects[0].play();
	
	switch (countLevel) {
		case 0:
			selectedLevel = _levels.ease;
			timerLevel = 10000;
			alert("level 1 - Ease - let's take it easy on you this time baby");
			_data.level = _gui.led.classList.toggle("gui__led--level1");
			++countLevel
			break;
		case 1:
			selectedLevel = _levels.normal;
			timerLevel = 8000;
			_data.level = _gui.led.classList.toggle("gui__led--level2");
			alert("level 2 - Normal - this challenge is not for crying babies");
			++countLevel

			break;
		case 2:
			selectedLevel = _levels.hard;
			timerLevel = 6000;
			_data.level = _gui.led.classList.toggle("gui__led--level3");

			alert("level 3 - Hard - are you really human !!!");
			++countLevel
			break;
		case 3:
			selectedLevel = _levels.veryhard;
			timerLevel = 5000;
			_data.level = _gui.led.classList.toggle("gui__led--level4");

			alert("level 4 - Very Hard - Only the best can survive here!");
			++countLevel
			break;
		case 4:
			selectedLevel = _levels.terminador;
			timerLevel = 4000;
			_data.level = _gui.led.classList.toggle("gui__led--level5");
			alert("Ultimate level - Terminator - Survive if you can, the existence of your galaxy depends on you!");
			++countLevel
			break;
	}

	if (countLevel > 4) countLevel = 0;	

});

/*** FUN PAD LISTENER ***/
const padListener = (e) => {
	if (!_data.playerCanPlay) return;

	let soundId;
	_gui.pads.forEach((pad, key) => {
		if (pad === e.target)
			soundId = key;
	} )

	e.target.classList.add("game__pad--active");

	_data.sounds[soundId].play();
	_data.playerSequence.push(soundId);

	e.target.classList.remove("game_pad--active");

	const currentMove = _data.playerSequence.length - 1;

	if (_data.playerSequence[currentMove] !== _data.gameSequence[currentMove])
	{
		_data.playerCanPlay = false;
		disablePads();
		resetOrPlayAgain();
	}
	else if (currentMove === _data.gameSequence.length - 1) {
		newColor();
		playSequence();
	}


}

_gui.pads.forEach(pad => {
	pad.addEventListener("click", padListener);
});

/*** FUN START GAME ***/
const startGame = () => {
	blink("--", () => {
		newColor();
		playSequence()
	})

}

/*** FUN SET SCORE ***/
const setScore = () => {
	const score = _data.score.toString();
	const display = "00".substring(0, 2 - score.length) + score;
	_gui.counter.innerHTML = display;
}

/*** FUN NEW COLOR ***/
const newColor = () => {
	_data.gameSequence.push(Math.floor(Math.random() * 4));
	_data.score++;
	setScore();
}

/*** FUN PLAY SEQUENCE ***/
const playSequence = () => {
	let counter = 0;
	let padOn = true;

	_data.playerSequence = [];
	_data.playerCanPlay = false;

	/*	 setInterval: 
			Executa uma função dada 
			dentro do tempo apresentado.
	*/
	const interval = setInterval(() => {
		//_data.effects[0].play();

		if (!_data.gameOn) {
			clearInterval(interval);
			disablePads();
			return;
		}

		if (padOn) {

			if (counter === _data.gameSequence.length) {
				clearInterval(interval);
				disablePads();
				waitForPlayerClick();

				_data.playerCanPlay = true;
				return;
			}

			const padId = _data.gameSequence[counter];
			const pad = _gui.pads[padId];

			_data.sounds[padId].play();

			pad.classList.add("game__pad--active");
			counter++;
		}

		else {
			disablePads();
		}

		padOn = !padOn;
	}, selectedLevel)
}

/*** FUN BLINK DISPLAY ***/
const blink = (text, callback) => {
	let counter = 0,
		on = true;
	_gui.counter.innerHTML = text;

	const interval = setInterval(() => {
		if (!_data.gameOn) {
			clearInterval(interval);
			_gui.counter.classList.remove("gui__counter--on")
			return;
		}
		if (on) {
			_gui.counter.classList.remove("gui__counter--on");
		}
		else {
			_gui.counter.classList.add("gui__counter--on");

			if (++counter === 3) {
				clearInterval(interval)
				callback();
			}
		}
		on = !on;
	}, 150);
}

/*** FUN WAIT FOR PLAYER CLIC ***/
const waitForPlayerClick = () => {
	clearTimeout(_data.timeout);

	_data.timeout = setTimeout(() => {
		if (!_data.playerCanPlay)
			return;
		
		disablePads();
		alert("Você é lerdo demais humano, vamos de novo!")
		resetOrPlayAgain();
	}, timerLevel)
}

/*** FUN RESET OR PLAY AGAIN ***/
const resetOrPlayAgain = () => {
	_data.playerCanPlay = false;

	if (_data.strict) {
		blink("!!", () => {
			_data.score = 0;
			_data.gameSequence = [];
			startGame();
		})
	}
	else {
		blink("!!", () => {
			setScore();
			playSequence();
		})
	}
}

/*** FUN CHANCGE PAD CURSOR ***/
const changePadCursor = (cursorType) => {

}
/*** FUN DISABLE PADS ***/
const disablePads = () => {
	_gui.pads.forEach(pad => {
		pad.classList.remove("game__pad--active");
	})
}