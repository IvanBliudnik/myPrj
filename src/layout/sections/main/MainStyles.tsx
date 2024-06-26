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
  flex-direction: ${props=> props.direction || "row"};
  justify-content: ${props=> props.justify || "flex-start"};
  align-items: ${props=> props.align || "strength"};
  flex-wrap: ${props => props.wrap || "no wrap"};
    flex-grow: 1;
    max-width: 50%;
    height: 100%;
    opacity: 1;
    gap: 25px;
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
    text-align: left;
    margin-top: 24px;
    p {
        display: none;
    }
    @media ${Theme.media.mobile} {
        text-align: center;
    }
    
`

const NameTitle = styled.h2<MainContainerPropsType>`
    ${font({
        family: "Manrope, sans-serif",
        weight: 700,
        Fmax: 50,
        Fmin: 36
    })}
    display: flex;
  flex-direction: ${props=> props.direction || "row"};
  justify-content: ${props=> props.justify || "flex-start"};
  align-items: ${props=> props.align || "strength"};
  flex-wrap: ${props => props.wrap || "no wrap"};
    color: rgb(149, 149, 149, 0,5);
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.5px;
    text-align: left;
  
    @media ${Theme.media.mobile} {
        margin: 15px 0 22px;
        text-align: center;
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