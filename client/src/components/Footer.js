import React from 'react';
import '../CSS/SCSS/Footer.scss';

const Footer = () => {
    return (
        <div className="layout__content">
            <div className="footer-wrap ">
                <div className="footer-bottom">
                    <div className="footer__area-logo">
                        <a href="/" className="footer__logo">
                            <img src="./static/logos/logo1.jpg" alt="Idea" title="Idea" />
                        </a>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="footer__area-menu">
                        <div className="menu-item" data-menu-handle="main-menu">
                            <p className="menu-title">
                                Компания
                            </p>
                            <ul>
                                <li>
                                    <a className="menu-link  " href="/page/about-us" data-menu-item-id="15518026">
                                        О нас
                                    </a>
                                </li>
                                <li>
                                    <a className="menu-link  " href="/blogs/blog" data-menu-item-id="18024169">
                                        Новости
                                    </a>
                                </li>
                                <li>
                                    <a className="menu-link  " href="/page/contacts" data-menu-item-id="15518029">
                                        Реквизиты
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-item" data-menu-handle="footer-menu">
                            <p className="menu-title">
                                Сервис
                            </p>
                            <ul>
                                <li>
                                    <a className="menu-link  " href="/page/payment" data-menu-item-id="15518023">
                                        Оплата
                                    </a>
                                </li>
                                <li>
                                    <a className="menu-link  " href="/page/delivery" data-menu-item-id="15518022">
                                        Доставка
                                    </a>
                                </li>
                                <li>
                                    <a className="menu-link  " href="/page/exchange" data-menu-item-id="18330602">
                                        Обмен и возврат
                                    </a>
                                </li>
                            </ul>
                        </div>









                    </div>


                    <div className="footer__area-sidebar">
                        <div className="contacts_title">
                            Контакты
                        </div>
                        <div className="footer__area-contacts">


                            <div className="footer__phone">
                                <a className="footer__phone-value" href="tel:+78008008080">+7 (800) 800-80-80</a>
                            </div>


                            <div className="footer__phone _phone-2">
                                <a className="footer__phone-value" href="tel:+78008008080">+7 (800) 800-80-80</a>
                            </div>


                        </div>
                        <div className="contacts_info">
                            г. Москва, 1-я Тверская-Ямская улица, дом 21
                        </div>
                        <div className="footer__area-social">
                            <div className="social-items">
                                <a target="_blank" href="#" className="social-img-item">
                                    <img src="https://static.insales-cdn.com/files/1/302/24346926/original/svg18.svg" alt="Иконка социальной сети" />
                                </a>
                                <a target="_blank" href="#" className="social-img-item">
                                    <img src="https://static.insales-cdn.com/files/1/1816/24987416/original/svg19.svg" alt="Иконка социальной сети" />
                                </a>
                                <a target="_blank" href="#" className="social-img-item">
                                    <img src="https://static.insales-cdn.com/files/1/304/24346928/original/svg16.svg" alt="Иконка социальной сети" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;