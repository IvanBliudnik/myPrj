import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexContainer} from "../../components/FlexContainer";
import {SF} from "./FooterStyle"
import { IconStyleBtn } from '../../components/Button';


const socialItemsData = [
    {
        iconId:"inst",
    },
    {
        iconId:"tg",
    },
    {
        iconId:"vk",
    },
]

export const Footer:React.FC = () => {
    return (
        <SF.Footer>
            <FlexContainer justify={"space-around"} align={"center"}>
                <SF.Copyright>Made by Ivan Bliudnik — Copyright 2024</SF.Copyright>
                <SF.SocialList>
                    {socialItemsData.map((s,index)=>{
                        return <SF.SocialItem>
                            <SF.SocialIconLink key={index}>

                                <Icon height={"40"}
                                      width={"20"} viewBox={"0 0 20 20"} iconId={s.iconId}/>

                            </SF.SocialIconLink>
                        </SF.SocialItem>
                    })}
                </SF.SocialList>
            </FlexContainer>
        </SF.Footer>
    );
};


