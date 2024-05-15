import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexContainer} from "../../../components/FlexContainer";
import styled from "styled-components";
import {S} from "../main/MainStyles"
import {Icon} from "../../../components/icon/Icon";
import {IconStyleBtn} from "../../../components/Button";

export const Contact:React.FC = () => {
    return (
        <Contacts id={"contact"}>
            <Container>
                <FlexContainer align={"center"} justify={"center"} wrap={"wrap"}>
                    <S.MainContainer>
                        <SectionTitle>
                            Contact Me
                        </SectionTitle>
                        <FlexContainer align={"center"} justify={"center"} wrap={"wrap"}>
                        <S.NameTitle>
                        <span>
                        If you are looking to hire a product designer, I’m currently available for freelance work
                        </span>
                        </S.NameTitle>
                        </FlexContainer>
                        <IconStyleBtn align={"center"} justify={"center"} wrap={"wrap"}>
                        <Icon iconId={"SubmitBtn"} width={"300px"} height={"57px"} viewBox="{0 0 80 80}"/>
                        </IconStyleBtn>
                        </S.MainContainer>
                </FlexContainer>
            </Container>
        </Contacts>
    );
};


 const Contacts = styled.section`
`