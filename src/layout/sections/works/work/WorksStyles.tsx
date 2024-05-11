import {StyleButton} from "../../../../components/Button";
import {Theme} from "../../../../styles/Theme";
import styled from "styled-components";
import {FlexContainer} from "../../../../components/FlexContainer";

const Works = styled.section`
    position: relative;

    ${FlexContainer} {
        gap: 30px;
    }
`

const Work = styled.div`

`

const ImageWrapper = styled.div`
    position: relative;
    gap: 24px;
    border-radius: 4px;
    
    ${StyleButton} {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: ${Theme.animation.transition};

    &::before {
        width: 100%;
        height: 100%;
    }
}

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        backdrop-filter: blur(2px);
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: ${Theme.animation.transition};
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        ${StyleButton} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }

    @media ${Theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${StyleButton} {
            opacity: 1;
        }
    }
`


const Image = styled.img`
    object-fit: cover;
`

const Title = styled.h3`
    color: white;
`
const Text = styled.p`
    margin: 14px 0 10px;
    color: #ffffff;
`
const Description = styled.div`
    padding: 25px 20px;
`


export const SW = {
    Work,
    Works,
    Image,
    Title,
    Text,
    Description,
    ImageWrapper,
}