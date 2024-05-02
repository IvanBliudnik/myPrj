import React from 'react';
import {S} from "../HeaderMenuStyles"

const items = [{
    title: "Home",
    href: "home",
},
    {
        title: "Work",
        href: "work",
    },
    {
        title: "Contact",
        href: "contact",
    }]

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink activeClass="active" to = {item.href}
                        // smooth={true}
                        // offset={5}
                        // spy={true}
                    >
                        {item.title}
                        <S.Mask>
                                <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};


