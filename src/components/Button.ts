import styled from "styled-components";
import {Theme} from "../styles/Theme";

type IconStyleBtnPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
}

export const StyleButton = styled.button`
  width: 300px;
  height: 57px;
  padding: 16px 48px 16px 48px;
  border-radius: 4px;
  margin: 88px 0 145px;
  background: rgba(157, 157, 157, 0);
  color: ${Theme.colors.font};
`

export const IconStyleBtn = styled.button<IconStyleBtnPropsType>`
  padding:88px 0 145px;
  display: flex;
  flex-direction: ${props=> props.direction || "row"};
  justify-content: ${props=> props.justify || "flex-start"};
  align-items: ${props=> props.align || "strength"};
  flex-wrap: ${props => props.wrap || "no wrap"};
`