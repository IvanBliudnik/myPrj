import React from 'react';
import {S} from "./MainStyles"
import photo from "../../../assets/images/photo.png"
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";
import {Icon} from "../../../components/icon/Icon";
import { IconStyleBtn } from '../../../components/Button';



export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexContainer align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <S.MainContainer>
                        <S.MainTitle>
                            Hi, I am Ivan Bliudnik. A Product Designer based in Tasucu.
                        </S.MainTitle>
                        <S.NameTitle>
                            <span>
                                I help businesses and companies reach
their goals by designing user-centric digital
products & interactive experiences.
                            </span>
                        </S.NameTitle>
                    <IconStyleBtn justify={"flex-start"} wrap={"wrap"}>
                        <Icon iconId={"SubmitBtn"} width={"300px"} height={"57px"} viewBox="{0 0 80 80}"/>
                    </IconStyleBtn>
                    </S.MainContainer>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexContainer>
            </Container>
        </S.Main>
    );
};

