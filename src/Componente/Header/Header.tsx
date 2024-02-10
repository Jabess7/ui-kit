import React from "react";
import logo from '../../assets/logo.svg'
import IconGoogle from '../../assets/icon-google.svg';
import IconApple from '../../assets/icon-apple.svg';
import style from './Header.module.css';


const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.container1}>
                <img src={logo} alt="logo" />
                <nav className={style.menuNav}>
                    <ul>
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                    </ul>
                </nav>

            </div>

            <div>
                <figure className={style.container2}>
                    <img src={IconGoogle} alt="" />
                    <img src={IconApple} alt="" />
                </figure>
            </div>
        </header>   
    );
}

export default Header;