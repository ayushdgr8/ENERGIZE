import React from 'react';
import { Route , Routes, Navigate } from 'react-router-dom'; 
import { Box } from '@mui/material'; 

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BmiCalculator from './pages/BmiCalculator';



import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Box width="400px" sx={{ width : {x1: '1488px'}}} m="auto"> 


   
    <Routes> 
        <Route path="/" element = {<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/BmiCalculator" element={<BmiCalculator />} />
    </Routes>
    <Footer />
     </Box>
  )
}

export default App


