import React from 'react';
import {StyleButton} from "../../../../components/Button";
import {SW} from "./WorksStyles"

type WorkPropsType = {
    src: string
}


export const Work:React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <SW.Work>
            <SW.ImageWrapper>
                <SW.Image src={props.src} alt=""/>
                <StyleButton>
                    InVersion
                </StyleButton>
            </SW.ImageWrapper>
        </SW.Work>
    );
};



