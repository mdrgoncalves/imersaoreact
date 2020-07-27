import React from 'react';

function ButtonLink(props) {
    // vai receber o valor de props = o classname da tag a
    // props => { className: 'o que alguém passar', href: '/'}

    return (
        <a href={props.href} className={props.classname}>
            {props.children}
        </a>
    );
}

export default ButtonLink;