import React from 'react';
import Logo from '../../assets/img/Logo2.png';
import './Menu.css'
import Button from '../Button';

//import ButtonLink from './compontents/ButtonLink';

// Exportar Menu e Topo da Página
function Menu() {
    return (
        <nav className='Menu'>
            
            <a href='/'>
                 <img className='Logo' src={Logo} alt='ShelterLogo' />
            </a>

            <Button as='a' className='ButtonLink' href='/'>
                Novo Vídeo
            </Button>

        </nav>
    );
}

export default Menu;