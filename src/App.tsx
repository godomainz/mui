import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/UI/Header/Header';
import theme from './components/UI/Theme/Theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
