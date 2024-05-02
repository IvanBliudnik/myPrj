import styled from "styled-components";
import {Theme} from "../../../styles/Theme";


const Contacts = styled.section`
    position: relative;
`

const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
    textarea {
        resize: none; // запрет изменения поля текстареа в Styled form 
        height: 155px;
    }
`

const Field = styled.input`
    width: 100%;
    background-color: ${Theme.colors.primaryBg};
    padding: 7px 15px;
    
    font-family: Poppins,sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.05em;
    
    color: ${Theme.colors.font};

`

export const SC = {
    Contacts,
    Form,
    Field,
}