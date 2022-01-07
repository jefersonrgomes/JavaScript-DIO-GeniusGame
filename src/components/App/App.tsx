import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main/Main';
import GlobalStyles from '../styles/GlobalStyles';
import { Container } from './styles';

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
      <GlobalStyles />
    </Container>
  );
}

export default App;