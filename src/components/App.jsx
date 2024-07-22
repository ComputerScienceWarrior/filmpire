import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Home, Movie, Movies, Actor, Profile, Navigation } from './index';

const App = () => {
  return (
    <div>
        <CssBaseline />
        <Navigation />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/actor/:id" element={<Actor />} />
                <Route path="/profile/:id" element={<Profile />} />
            </Routes>
        </main>
        <h1>Hello, World - Filmpire</h1>
    </div> 
  )
};

export default App;
