import styled from "styled-components";
import {Theme} from "../styles/Theme";


export const StyleButton = styled.button`
    width: 170px;
    height: 32px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    border-radius: 4px;
    color: white;
    margin: 88px 0 145px;

    background: rgba(157, 157, 157, 0.5);
    
    z-index: 0;
    
    
    &:hover {
        &::before {
            width: 100%;
        }
    }
    
    &::before {
        content: "";
        display: inline-block;
        height: 10px;
        width: 25%;
        background-color: ${Theme.colors.buttonBg};
        transition: ${Theme.animation.transition};
        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: -1;
        border-radius: 4px;
        transform: translateX(-50%);
    }
`
