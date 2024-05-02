import React from 'react';
import {Link} from "../../../../components/Link";
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
            <SW.Description>
                <Link active href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </SW.Description>
        </SW.Work>
    );
};



