import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup/signup';
import Payment from './pages/payment/payment';
import Intro from './pages/intro/intro';
import Login from './pages/login/login';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import Organisation from './pages/Organisation/Organisation';
import FilterPage from './pages/FilterPage/FilterPage';
import Donation from './pages/donation/donation'


const app = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/explorePage" element={<ExplorePage />} />
            <Route path="/filterPage" element={<FilterPage />} />
                <Route path="/donation" element={<Donation />} />
                <Route path="/organisation/:id" element={<Organisation />} />
        </Routes>
        </BrowserRouter>
    );
};

export default app;