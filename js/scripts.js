
/*** *** *** *** ***/
/*    ATRIBUTES    */
/*** *** *** *** ***/

const _levels = {
	ease: 600,
	normal: 500,
	hard: 400,
	veryhard: 300,
	terminador: 200
}

let record;
let messageCard = "";
let countLevel = 0;
let selectedLevel = _levels.ease;
let timerLevel = 10000;

const _data = {
	gameOn: false,
	timeout: undefined,
	sounds: [],
	stages: [],
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
	led: document.querySelector(".gui__led"),
	ledLevel: document.querySelector(".gui__led--level"),
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

const _audioStagesUrls = [
	'../assets/audios/stages/startgame.mp3',
	'../assets/audios/stages/win.mp3'
]

_audioStagesUrls
	.forEach(sndPath => {
		const audio = new Audio(sndPath);
		_data.stages.push(audio);
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
	changePadCursor("auto");
	_gui.led.classList.remove("gui__led--active");
	_gui.ledLevel.classList.remove("gui__led--level1", "gui__led--level2", "gui__led--level3", "gui__led--level4", "gui__led--level5");
	if (!_data.gameOn) return;
	else _data.effects[2].play();
	countLevel = 0;
});

_gui.strict.addEventListener("click", () => {
	if (!_data.gameOn) return;
	alert("*** 🚨 STRICT MODE ATIVADO 🚨 ***\n\n👨‍⚕️ PROFESSOR 👨‍⚕️\n\nOh não, o que você fez !!!\nAo ativar o STRICT MODE você tera apenas uma unica chance de descriptografar a sequencia do GENIUS\nSe você falhar sera FIM DE JOGO!");
	alert("🛸 ALIENS 🛸 \nMODO MORTE SUBITA ATIVADO\nA PARTIR DE AGORA VOCÊ NÃO PODE ERRAR NENHUMA SEQUENCIA HUMANO!\nUuHAHaaAaAhHA GALAXIA SEU NOSSA SERA");
	document.getElementById("textMode").innerHTML = "STRICT";
	_data.strict = _gui.led.classList.toggle("gui__led--active");
	_data.effects[1].play();
	counter = 0;
	});

_gui.start.addEventListener("click", () => {
	if (!_data.gameOn) return;
	startGame();

	if (!_data.strict) 	document.getElementById("textMode").innerHTML = "NORMAL";
	else document.getElementById("textMode").innerHTML = "STRICT";
});

_gui.level.addEventListener("click", () => {

	if (!_data.gameOn) return;
	_data.effects[1].play();


	if (countLevel > 4) {
		_data.level = _gui.ledLevel.classList.remove("gui__led--level5");
		countLevel = 0;
		swithLevel();
	}
	else {
		swithLevel();
	}

});

const swithLevel = () => {
	switch (countLevel) {

		case 0:
			blink("L1", () => {
				selectedLevel = _levels.ease;
				timerLevel = 10000;
				alert("*** LEVEL 1 - FACIL ***");
				alert("🛸 ALIENS 🛸\nVamos pegar leve com você desta vez novato");
				_data.level = _gui.ledLevel.classList.add("gui__led--level1");
				++countLevel
				document.getElementById("textLevel").innerHTML = " 1 FACIL";
				blink("L1");
				blink("--");

			})
			break;
		case 1:
			blink("L2", () => {
				selectedLevel = _levels.normal;
				timerLevel = 8000;

				_data.level = _gui.ledLevel.classList.remove("gui__led--level1");
				_data.level = _gui.ledLevel.classList.add("gui__led--level2");
				alert("*** LEVEL 2 - NORMAL ***");
				alert("🛸 ALIENS 🛸\n¨Esse desafio não é para bebês choroes, que tal desistir e voltar para o colinho da mamae!¨");
				++countLevel
				document.getElementById("textLevel").innerHTML = " 2 NORMAL";
				blink("L2");
				blink("--");
			})
			break;

		case 2:
			blink("L3", () => {
				selectedLevel = _levels.hard;
				timerLevel = 6000;
				_data.level = _gui.ledLevel.classList.remove("gui__led--level2");
				_data.level = _gui.ledLevel.classList.add("gui__led--level3");
				alert("*** LEVEL 3 - HARD  ***");
				alert("🛸 ALIENS 🛸\n👀 Você é ousado ah! ... 👽 Gostei disso.\nVoce esta realmente pronto para este nivel Humano?");
				++countLevel
				document.getElementById("textLevel").innerHTML = " 3 DIFICIL";
				blink("L3");
				blink("--");
			})
			break;

		case 3:
			blink("L4", () => {
				selectedLevel = _levels.veryhard;
				timerLevel = 5000;
				_data.level = _gui.ledLevel.classList.remove("gui__led--level3");
				_data.level = _gui.ledLevel.classList.add("gui__led--level4");
				alert("*** LEVEL 4 - VERY HARD  ***");
				alert("🛸 ALIENS 🛸\n👀👀👀 Você é louco cara ... espera, você é louco mesmo não é?");
				++countLevel
				document.getElementById("textLevel").innerHTML = " 4 SUPER DIFICIL";
				blink("L4");
				blink("--");
			})
			break;

		case 4:
			blink("L5", () => {
				selectedLevel = _levels.terminador;
				timerLevel = 4000;
				_data.level = _gui.ledLevel.classList.remove("gui__led--level4");
				_data.level = _gui.ledLevel.classList.add("gui__led--level5");
				alert("*** LEVEL 5 - ULTIMATE ***");
				alert("🛸 ALIENS 🛸\nSobreviva se você puder!");
				++countLevel
				document.getElementById("textLevel").innerHTML = " 5 ULTIMATE";
				blink("L5");
				blink("--");
			})
			break;
	}
}

/*** FUN PAD LISTENER ***/
const padListener = (e) => {
	if (!_data.playerCanPlay) return;

	let soundId;
	_gui.pads.forEach((pad, key) => {
		if (pad === e.target)
			soundId = key;
	})

	e.target.classList.add("game__pad--active");

	_data.sounds[soundId].play();
	_data.playerSequence.push(soundId);


	setTimeout(() => {
		e.target.classList.remove("game_pad--active");

		const currentMove = _data.playerSequence.length - 1;

		if (_data.playerSequence[currentMove] !== _data.gameSequence[currentMove]) {
			_data.playerCanPlay = false;
			disablePads();
			resetOrPlayAgain();
		}
		else if (currentMove === _data.gameSequence.length - 1) {
			newColor();
			playSequence();
		}
		waitForPlayerClick();

	}, 250);
}

_gui.pads.forEach(pad => {
	pad.addEventListener("click", padListener);
});

/*** FUN START GAME ***/
const startGame = () => {

	alert("📰 ATENÇÃO NOTICIA URGENTE 📰 \n\nAliens conquistadores de galaxias, vindos de uma Galaxia distante\nImplantaram no nucleo de nosso planeta um dispositivo chamado GENIUS O Conquistador de Mundos!\nSe ele não for desativado não so nosso planeta, mas toda galaxia estara perdida!")
	alert("👨‍⚕️ PROFESSOR 👨‍⚕️\n\nHei você é realmente corajoso hein!\nVou te contar o que descobrimos por aqui\nO GENIUS emite 4 tipos diferentes de ondas sonoras e uma luz nunca vista antes\nPara desativar o dispositivo Alien, basta repetir exatamente a mesma sequencia que o dispositivo\nfaz para iniciar a terraplanagem\nAcreditamos que isso deve causar um curto na programação do GENIUS e após 10 ou 12 vezes ele deve desligar!")
	alert("👨‍⚕️ PROFESSOR 👨‍⚕️:\nGenius emite sons e audios curtos\nAjuste o volume do seu dispositivo para uma altura agradavel");
	alert("👨‍⚕️ PROFESSOR 👨‍⚕️\n\nContamos com você para esta missão!\nAh, e mais uma coisa, não importa o que aconteça la embaixo, não aperte nenhum botão diferentãoa, isso pode acelerar o tempo ou tornar as coisas mais complicadas!\n\nBom agora é com você. Boa Sorte!");

	//_data.stages[0].play();

	blink("--", () => {
		newColor();
		playSequence()
	})

}

/*** FUN SET SCORE ***/
const setScore = () => {
	let multscore = 2;
	const score = _data.score.toString();
	const display = "00".substring(0, 2 - score.length) + score;
	_gui.counter.innerHTML = display;

	switch (countLevel) {
		case 0:
			multscore = 2;
			break;
		case 1:
			multscore = 3;
			break;
		case 2:
			multscore = 4;
			break;
		case 3:
			multscore = 5;
			break;
		case 4:
			multscore = 6;
			break;
		case 5:
			multscore = 10;
			break;
	}

	document.getElementById("textRound").innerHTML = display;
	document.getElementById("multscore").innerHTML = multscore;
	document.getElementById("textScore").innerHTML = multscore * display;

}

/*** FUN NEW COLOR ***/
const newColor = () => {
	if (_data.score === 2) {


		alert("🛸 ALIENS 🛸\nNÃO, NÃO ... IMPOSSÍVEL.\n COMO SERES TÃO INFERIORES PODEM SUPERAR NOSSA TECNOLOGIA!!\nNÃO ACABOU HUMANO, EM BREVE VOLTAREMOS PARA REIVINDICAR SUA GALÁXIA!")
		alert("👨‍⚕️ PROFESSOR 👨‍⚕️\n\nParabéns, você salvou a Terra e toda a Galáxia.!");
		alert("📰 NOTICIA URGENTE 📰 \n\nApós Humilhante derrota.\n os Aliens retornaram para sua galáxia, com a promessa vingança, e de melhorar seu GÊNIUS O conquistador de mundos.\nE voltarem para dominar a Terra e toda nossa galáxia novamente!")
		alert("🎇🎇✨ FIM DE JOGO - VOCE VENCEU ✨🎇🎇.\n\nObrigado por jogar.\nvolte sempre que quiser se divertir.\n Clique em Iniciar para iniciar um novo jogo.\n\nDesenvolvido por: Jeferson Gomes 🙋‍♂️");
		if (_data.score > record) record = _data.score;
		_data.stages[1].play();
		alert("🎇🎇✨ FIM DE JOGO - VOCE VENCEU ✨🎇🎇.\n\nObrigado por jogar.\nvolte sempre que quiser se divertir.\n Clique em Iniciar para iniciar um novo jogo.\n\nDesenvolvido por: Jeferson Gomes 🙋‍♂️");

		blink("🏆", () => {
			_data.score = 0;
			_data.gameSequence = [];
		})
		return;
	}
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

	changePadCursor("auto");
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
				changePadCursor("pointer")

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
		alert("🛸 ALIENS 🛸\nVOCE É MUITO LERDO HUMANO! JAMAIS CONSEGUIRA DESATIVAR O GENIUS!")
		resetOrPlayAgain();
	}, timerLevel)
}

/*** FUN RESET OR PLAY AGAIN ***/
const resetOrPlayAgain = () => {
	_data.playerCanPlay = false;

	if (_data.strict) {
		blink("##", () => {
			_data.score = 0;
			_data.gameSequence = [];
			alert("🛸 ALIENS 🛸\nVOCE PERDEU HUMANO!\nSUA TENTATIVA DE CORROMPER O GENIUS FALHOU\nO GENIUS FOI ATIVADO COMPLETAMENTE\nSEU PLANETA  E SUA GALAXIA AGORA NOS É NOSSO\nREDUZA-SE A SUA INSIGNIFICANCIA\nE VA AGORA LIMPAR A JAULA DOS BLORGS\nE TERA SORTE SE NÃO FOR DEVORADO POR ELES HAHAHAHAHA!!!");
			alert("*** FIM DE JOGO ***\n--- --- ---\nVocê foi ambicioso e quiz arriscar tudo ao acionar o STRICT Mode.\n\nGAME OVER\n\nPRESS START FOR NEW GAME");

			_data.strict = false;
			_gui.led.classList.remove("gui__led--active");

			//			startGame();
			blink('--');
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
	_gui.pads.forEach(pad => {
		pad.style.cursor = cursorType;
	})
}
/*** FUN DISABLE PADS ***/
const disablePads = () => {
	_gui.pads.forEach(pad => {
		pad.classList.remove("game__pad--active");
	})
}


