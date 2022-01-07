import React from 'react';
import * as S from './styles';

const Main = () => {
  return (
    <S.Container>
      <S.BoxGame>
        <S.PadTopLeft className="game__pad game__pad--tl game__pad--active"></S.PadTopLeft>
        <S.PadTopRight className="game__pad game__pad--tr"></S.PadTopRight>
        <S.PadBottonLeft className="game__pad game__pad--bl"></S.PadBottonLeft>
        <S.PadBottonRight className="game__pad game__pad--br"></S.PadBottonRight>
      </S.BoxGame>
    </S.Container>
  );
};

export default Main;