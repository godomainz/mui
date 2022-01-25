import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/UI/Header/Header';
import theme from './components/UI/Theme/Theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
          Hello
      </ThemeProvider>
      
    </div>
  );
}

export default App;
