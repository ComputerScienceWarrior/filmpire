import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Home, Movie, Movies, Actor, Profile, Navigation } from './index';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navigation />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/actor/:id" element={<Actor />} />
                    <Route path="/profile/:id" element={<Profile />} />
                </Routes>
            </main>
        </div> 
    );
};

export default App;
