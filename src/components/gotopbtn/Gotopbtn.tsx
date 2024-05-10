// @ts-ignore
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {
    // сетаем кнопку при скроле вниз на 200 пунктов
    const [showBtn, setshowBtn] = useState(false)

    useEffect(()=> {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        })
    }, [])

    return (

        <>
            {showBtn && (
                <StyledGoTopBtn onClick = {()=>{scroll.scrollToTop()}}>
                    <Icon iconId={"arrowUp"} height={"15"} width={"16"} viewBox={"0 0 16 15"}/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.2);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`
