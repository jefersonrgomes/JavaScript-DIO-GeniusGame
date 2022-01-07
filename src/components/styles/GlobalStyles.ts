import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

/**********************************/
/* 0. Variáveis
/* 1. Tags
/* 2. Body
/* 3. Game
/*   3.1 Pads
/*   3.2 Center
/*      3.2.1 GUI
/* 4. Footer
/**********************************/

/**********************************/
/* Color Guide:
/* 
/* #00A74A : normal-green
/* #9F0F17 : normal-red
/* #CCA707 : normal-yellow
/* #094A8F : normal-blue
/* #13ff7c : light-green
/* #ff4c4c : light-red
/* #fed93f : light-yellow
/* #1c8cff : light-blue
/* #333333 : gray
/* #ECE7EE : center
/* #32050C : counter-color
/*
/**********************************/

/**********************************/
/* 0. Variáveis
/**********************************/

:root
{ 
  //Pads Color
  --clr-normal-green:   #00A74A;
	--clr-normal-red:     #9F0F17;
	--clr-normal-yellow:  #CCA707;
	--clr-normal-blue:    #094A8F;
	
	--clr-light-green:    #13ff7c;
	--clr-light-red:      #ff4c4c;
	--clr-light-yellow:   #fed93f;
	--clr-light-blue:     #1c8cff;
	
	--clr-border:         #333333;
	--clr-center:         #ECE7EE;

	--clr-counter-bg:	    #32050C;
	--clr-counter-off:	  #430710;
	--clr-counter-on:	    #DC0D29;
	
	--clr-switch: 	      #3193DE;

	--game-size: 48rem;
	--game-border: 1.5rem solid var(--clr-border);
}


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
*::before,
*::after {
	box-sizing: border-box;
}
  html {
    min-height:100%;
    background: var(--primary);
    font-size: 62.5%;
  }

  *, button, input{
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    color: var(--black);
  }

  ul{
    list-style: none;
  }
  
`;