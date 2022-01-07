import styled from "styled-components";
export const Container = styled.div`
      display: flex;
      background: var(--white);
      padding: 11px 16px;
      height: 100%;
`;

export const PadButton = styled.div`
      width: var(--game-size);
      height: var(--game-size);
      display: flex;
      flex-wrap: wrap;
      
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

export const Console = styled.div`
     
`;