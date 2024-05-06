import React from 'react';
import {S} from "./MainStyles"
import photo from "../../../assets/images/photo.png"
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";
import {StyleButton} from "../../../components/Button";


export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexContainer align={"center"} justify={"center"} wrap={"wrap"}>
                    <S.MainContainer>
                        <S.NameTitle>
                            <span>
                                I help businesses and companies reach
their goals by designing user-centric digital
products & interactive experiences.
                            </span>
                        </S.NameTitle>
                        <S.MainTitle>
                            Hi, I am Ivan Bliudnik. A Product Designer based in Tasucu.
                        </S.MainTitle>
                        <StyleButton type={"submit"} >9kyb@mail.ru</StyleButton>
                    </S.MainContainer>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexContainer>
            </Container>
        </S.Main>
    );
};

