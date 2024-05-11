import React, {ElementRef, useRef} from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexContainer} from "../../../components/FlexContainer";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import {S} from "../main/MainStyles"
import {Icon} from "../../../components/icon/Icon";
import {IconStyleBtn} from "../../../components/Button";

export const Contact:React.FC = () => {
    // const form = useRef<ElementRef<"form">>(null);

    // const sendEmail = (e: any) => {
    //     e.preventDefault();
    //
    //
    //     if(!form.current) return
    //     emailjs
    //         .sendForm('service_r96tfyc', 'template_p5uhfnx', form.current, {
    //             publicKey: 'trNvFa6zNSzqqrtb0',
    //         })
    //         .then(
    //             () => {
    //                 console.log('SUCCESS!');
    //             },
    //             (error) => {
    //                 console.log('FAILED...', error.text);
    //             },
    //         );
    //     e.target.reset()
    // };
    return (
        <Contacts id={"contact"}>
            <Container>
                <FlexContainer align={"center"} justify={"center"} wrap={"wrap"}>
                    <S.MainContainer>
                        <SectionTitle>
                            Contact Me
                        </SectionTitle>
                        <S.NameTitle >
                        <span>
                        If you are looking to hire a product designer, I’m currently available for freelance work
                        </span>
                        </S.NameTitle>
                        <IconStyleBtn>
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