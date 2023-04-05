import './header.scss';
import { Menu, X } from 'feather-icons-react';
import React, { useState } from 'react';
import icon from '../../assets/images/cat-black-face.png'
const Header = () => {
    const [showMenu, setShowMenu] = useState(false); 
    return (
        <nav>
            <img src={icon} className='iconPage' alt="icon page" />
            <ul className={showMenu ? 'show': ''}>
                <li onClick={()=> setShowMenu(false)}><a href="#" >Small Cats</a></li>
            </ul>
            <button className="hamburguer--menu" id="hamburguer--menu" aria-label="hamburguer-menu">
                {!showMenu ?
                <Menu onClick={()=> setShowMenu(!showMenu)}/>
                :
                <X onClick={()=> setShowMenu(!showMenu)}/>
                }
            </button>
        </nav>
    )
}

export default Header