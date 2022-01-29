/*** *** *** *** ***/
/*    ATRIBUTES    */
/*** *** *** *** ***/

const _data = {
	gameOn: false,
	timeout: undefined,
	sounds: [],
	strict: false,
	playerCanPlay: false,
	score: 0,
	gameSequence: [],
	playerSequence: []
};

const _gui = {
	counter: document.querySelector(".gui__counter"),
	switch: document.querySelector(".gui__btn--switch"),
	led: document.querySelector(".gui__led"),
	strict: document.querySelector(".gui__btn--strict"),
	start: document.querySelector(".gui__btn--start"),
	pads: document.querySelectorAll(".game__pad")
}

const _soundUrls = [
	"audio/simonSound1.mp3",
	"audio/simonSound2.mp3",
	"audio/simonSound3.mp3",
	"audio/simonSound4.mp3"
];

_soundUrls.forEach(sndPath => {
	const audio = new Audio(sndPath);
	_data.sounds.push(audio);
});

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
}); 

_gui.strict.addEventListener("click", () => {
	if(!_data.gameOn) return;	
	_data.strict = _gui.led.classList.toggle("gui__led--active");
});


/*** FUN DIABLE PADS ***/


_gui.start.addEventListener("click", () => {
	startGame();
	console.log('clicado start')
});

/*** FUN PAD LISTENER ***/
const padListener = (e) => {

}

_gui.pads.forEach(pad => {
	pad.addEventListener("click", padListener);
});

/*** FUN START GAME ***/
const startGame = () => {
	blink("--", () => {
		newColor();
		console.log("Game iniciado com sucesso!");
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
	_data.gameSequence.push =  Math.floor(Math.random() * 4);
	_data.score++;
	setScore();
}

/*** FUN PLAY SEQUENCE ***/
const playSequence = () => {

}


/*** FUN BLINK DISPLAY ***/
const blink = (text, callback) => {
	let counter = 0,
		on = true;
	_gui.counter.innerHTML = text;

	const interval = setInterval(() => {
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
}

/*** FUN RESET OR PLAY AGAIN ***/
const resetOrPlayAgain = () => {

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