import React from 'react';
import logo from "../img/логотип.svg";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div id='header'>
            <div className="container">
                <div className='header'>
                    <div className='header--right'>
                        <NavLink className='logo' to={'/home'}><img src={logo} alt=""/></NavLink>
                        <div className='links'>
                            <NavLink className='name' to={'/AboutSchool'}>О школе</NavLink>
                            <NavLink className='name' >Наши курсы</NavLink>
                            <NavLink className='name'  to={'/AboutUs'}>О нас</NavLink>
                        </div>
                    </div>

                    <div className='header--left'>
                        <button className='header--left__without'>Войти</button>
                        <button className='header--left__with'>Подписаться</button>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Header;