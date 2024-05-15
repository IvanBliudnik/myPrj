import styled from "styled-components";

type HeaderContainerPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
}

const Header = styled.header`
    backdrop-filter: blur(20px);
    background: rgba(50, 50, 50, 0.7);
    width: 100%;
`
const HeaderContainer  = styled.header<HeaderContainerPropsType>`
  display: flex;
  flex-direction: ${props=> props.direction || "row"};
  justify-content: ${props=> props.justify || "flex-start"};
  align-items: ${props=> props.align || "strength"};
  flex-wrap: ${props => props.wrap || "no wrap"};
  flex-grow: 1;
  height: 100%;
  opacity: 1;
`
export const S = {
    Header,
    HeaderContainer,
}