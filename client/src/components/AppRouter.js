import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import Home from '../pages/Home';
import { Context } from '../index';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { runInAction } from "mobx";
import Footer from './Footer';
import { Col, Container, Row } from 'react-bootstrap';
import HomeLeftBar from '../components/commonComponents/HomeLeftBar';
import FollowUs from '../components/commonComponents/FollowUs';
import HomePopular from '../components/commonComponents/HomePopular';
import { fetchCategories } from '../http/productAPI';

const AppRouter = observer(() => {
    const { user } = useContext(Context);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchCategories();
                setCategories(result);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                runInAction(() => {
                    user.setIsAuth(true);
                });
            } catch (e) {
                console.error('Error setting auth state:', e);
            }
        }
    }, [user]);
    return (
        <>
            <NavBar />

            <Container fluid>
                <Row>
                    <Col xs={3} md={3}>
                        <HomeLeftBar categories={categories} />
                        <FollowUs />
                        <HomePopular />
                    </Col>
                    <Col xs={9} md={9}>
                        <Routes>
                            <Route path='/' element={<h1>ENTERING PAGE</h1>} />
                            {user.isAuth && authRoutes.map(({ path, Component }) =>
                                <Route key={path} path={path} element={<Component />} exact />
                            )}
                            {publicRoutes.map(({ path, Component }) =>
                                <Route key={path} path={path} element={<Component />} />
                            )}
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
});

export default AppRouter;