import React, { useContext, useEffect } from 'react';
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

const AppRouter = observer(() => {
    const { user } = useContext(Context);

    const leftBarCategories = [
        'Для девочек',
        'Для мальчиков',
        'Для новорожденных',
        'Канцелярия',
        'Аксессуары',
        'Спорт',
        'Настольные игры',
        'Коляски',
        'Развитие',
        'Конструкторы',
        'Хиты',
        'Новинки',
        'Акции',
        'Популярное'
    ];

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
                        <HomeLeftBar categories={leftBarCategories} />
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