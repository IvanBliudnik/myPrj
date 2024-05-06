import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


type MainContainerPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
}

const Main = styled.section`
    position: relative;
    min-height: 100%;
    background-color: ${Theme.colors.primaryBg};
    display: flex;
`
const MainContainer  = styled.div<MainContainerPropsType>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
    flex-grow: 1;
    max-width: 50%;
    height: 100%;
    opacity: 1;
`
const PhotoWrapper = styled.div<MainContainerPropsType>`
    width: auto;
    max-width: 100%;
    opacity: 1;
    padding: 10px;

        @media ${Theme.media.mobile} {
            top: 17px;
            left: 20px;
            width: 314px;
            height: 414px;
        }
    }`

const Photo = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;


    @media ${Theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`


const MainTitle = styled.h1`
    ${font({
        family: "Manrope, sans-serif",
        weight: 400, 
        Fmax: 27, 
        Fmin: 20
    })}
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: rgb(222, 222, 222);
    font-size: 54px;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: -0.5px;
    text-align: center;
    
    p {
        display: none;
    }
    @media ${Theme.media.mobile} {
    display: flex;
        align-items: center;
        justify-content: center;
    }
    
`

const NameTitle = styled.h2`
    ${font({
        family: "Manrope, sans-serif",
        weight: 700,
        Fmax: 50,
        Fmin: 36
    })}
    display: flex;
    width: auto;
    color: rgb(149, 149, 149);
    font-family: Manrope;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.5px;
    text-align: center;
    @media ${Theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

export const S = {
        Main,
        MainContainer,
        PhotoWrapper,
        Photo,
        MainTitle,
        NameTitle,
   }

// ${font({weight: 400, Fmax: 27, Fmin: 20})}