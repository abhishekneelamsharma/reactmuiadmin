import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import Sidebar from './components/Sidebar';
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Table from './pages/Table';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import  Calendar from './pages/Calendar';
import  Barchart from './pages/Barcharts';



const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='app'>
            <Sidebar />
            <div className='content' style={{ padding: "10px",overflowY:"scroll" }}>
              <Navbar />

              <Routes>
                <Route path="/table" element={<Table />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/calender" element={<Calendar />} />
                <Route path="/bar-chart" element={<Barchart />} />
              </Routes>

            </div>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App