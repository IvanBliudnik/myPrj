import styled from "styled-components";
import {Theme} from "../styles/Theme";


export const StyleButton = styled.button`
  width: 300px;
  height: 57px;
  padding: 16px 48px 16px 48px;
  border-radius: 4px;
  margin: 88px 0 145px;
  background: rgba(157, 157, 157, 0);
  color: ${Theme.colors.font};
`

export const IconStyleBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 48px 16px 48px;
  
`