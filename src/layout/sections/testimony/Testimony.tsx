import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {FlexContainer} from "../../../components/FlexContainer";
import {S} from "../skills/skill/SkillStyles"
import {Theme} from "../../../styles/Theme";

export const Testimony:React.FC = () => {
    return (
        <StyleTestimony id={"testimony"}>
            <SectionTitle>Testimony</SectionTitle>
            <FlexContainer direction={"column"} align={"center"}>
                <S.IconWrapper>
                    <Icon iconId={"quote"}/>
                </S.IconWrapper>
            </FlexContainer>
        </StyleTestimony>
    );
};

const StyleTestimony = styled.section`
  min-height: 50vh;
  background-color: ${Theme.colors.primaryBg};
    position: relative;
  
  ${S.IconWrapper} {
    margin: 32px 0 72px;
  }
`
