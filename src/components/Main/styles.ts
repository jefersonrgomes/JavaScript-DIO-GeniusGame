import styled from "styled-components";

/*** CONTAINER STYLES ***/
export const Container = styled.div`
      display: flex;
      background: var(--white);
      padding: 11px 16px;
      margin-top: 5rem;
      height: 100%;
        
.game__otions{
     position: absolute;
     background-color: var(--clr-center);
     width : calc(var(--game-size)/2) ;
     height : calc(var(--game-size)/2) ;
     top: calc(var(--game-size)/4);
     left: calc(var(--game-size)/4);
     border: var(--game-border);
     border-radius: 25rem;
}
.game__title{
 font-size: 4rem;
 text-transform: uppercase;
 margin: 0;
 padding-left: 1.2rem;
 padding-top: 4.7rem;
 text-align: center;
}
`;
/*** *** *** *** ***/

/*** PADBUTTON STYLES ***/
export const PadButton = styled.div`
      position: relative;
      width: var(--game-size);
      height: var(--game-size);
      display: flex;
      flex-wrap: wrap;
      margin-top: 5rem;

      
.game__pad{

      width: calc(var(--game-size)/2);
      height: calc(var(--game-size)/2);
}

.game__pad--tl.game__pad--active{
      background: var(--clr-light-green);
}

.game__pad--tr.game__pad--active{
      background: var(--clr-light-red);
}

.game__pad--bl.game__pad--active{
      background: var(--clr-light-yellow);
}

.game__pad--br.game__pad--active{
      background: var(--clr-light-blue);
}

.game__pad--btn{
      cursor: pointer;
}
`;

export const PadTopLeft = styled.div`
      border: 1px solid green;
      background: var(--clr-normal-green);
      border-top-left-radius: 100%;
`;

export const PadTopRight = styled.div`
      border: 1px solid red;   
      border-top-right-radius: 100%;
      background: var(--clr-normal-red);
`;

export const PadBottonLeft = styled.div`
      border: 1px solid yellow;
      border-bottom-left-radius: 100%;
      background: var(--clr-normal-yellow);
`;

export const PadBottonRight = styled.div`
      border: 1px solid blue;
      border-bottom-right-radius: 100%;      
      background: var(--clr-normal-blue);
`;
/*** *** *** *** ***/

/*** CONSOLE STYLES ***/
export const Console = styled.div`
   
`;

export const Gui = styled.div`
      padding-left: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items:flex-end;

      .group{
      margin-right: 2.2rem;
      }
      .group-large{
      display: flex;
      width: 10rem;
      margin-left: 4.5rem;
      }
      .gui__label{
      font-family: "Arima Madurai", cursive;
      font-weight: bold;
      font-size: 0.75rem;
      text-align: center;
      text-transform: uppercase;
      }
      .gui__label--switch{
     margin: 0;
     padding-top: 0.75rem;
      }

      .gui__btn{
            width: 2.5rem;
            height: 2.5rem;
            margin-left: .2rem;
            border-radius: 5rem;
            box-shadow: 0 .2rem .3rem #222;
            border: .4rem solid #444;
            cursor: pointer;
      }
      .gui__btn:active{
            transform: translate(0, .3rem);
            box-shadow: none;
      }

      .gui__btn--start{
            background-color: red;
      }

      .gui__btn--strict{
            background-color: yellow;
      }

      .gui__btn-switch{
            background-color: #222;
            width: 5rem;
            height: 2.3rem;
            margin-left: .5rem;
            margin-right: .5rem;
            border-radius: .3rem;
            cursor: pointer;

      }

      .gui__btn-switch::before{
            content: '';
            background-color: aqua;
            display: block;
            position: relative;
            left: 2.5rem;
            width: 2.2rem;
            height: 1.9rem;
            border-radius: .3rem;
            border: .2rem solid #444;
      }
      .gui__btn-switch--on::before{
            left: 0;
            transition: .2s ease-in-out;
      }

      .gui__counter{    
            background-color: var(--clr-counter-bg);
            color: var(--clr-counter-off);
            font-family: "Iceland", cursive;
            text-align: center;
            font-size: 2rem;
            border: .3rem solid #222;
            border-radius: .3rem;
            width:5.5rem;
            padding-left: .3rem;
            padding-right: .2rem;
      }
      .gui__counter--on{    
            color: var(--clr-counter-on);
      }

      .gui__led{
            background-color: #32050c;
            margin-left: 1rem ;
            margin-bottom: .5rem;
            width:.8rem;
            height: .8rem;
            border: .2rem solid #222;
            border-radius: 2rem;
      }

      .gui__led--active{
            background-color: red;
      }


`;
/*** *** *** *** ***/