import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import Sidebar from './components/Sidebar';
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Table from './pages/Table';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='app'>
            <Sidebar />
            <div className='content' style={{ padding: "10px" }}>
              <Navbar />
              <div style={{ padding: "20px" }}>
                <Routes>
                  <Route path="/table" element={<Table />} />
                </Routes>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App