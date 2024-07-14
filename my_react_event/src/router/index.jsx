import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import LifeService from "../pages/LifeService";
import Shop from "../pages/Shop";
import User from "../pages/User";
import Login from '../pages/Login';

import BottomNav from "../components/BottomNav"


const AppRouter = () => {
    return (
        <Router>
            <BottomNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/life" element={<LifeService />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/user" element={<User />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;

