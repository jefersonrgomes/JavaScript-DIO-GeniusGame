import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import GlobalStyles from '../styles/GlobalStyles';
import * as S from './styles';

function App() {
  return (
    <S.Container>
      <Header />
      <Main />
      <Footer />
      <GlobalStyles />
    </S.Container>
  );
}

export default App;
