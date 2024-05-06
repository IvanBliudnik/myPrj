import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexContainer} from "../../../components/FlexContainer";
import {Work} from "./work/Work";
import p1 from "./../../../assets/images/p1.png"
import p2 from "./../../../assets/images/p2.png"
import p3 from "./../../../assets/images/p3.png"
import p4 from "./../../../assets/images/p4.png"
import {Container} from "../../../components/Container";
import {SW} from "./work/WorksStyles"


const worksData = [
    {
        src: p1,
        id: 1,
    },
    {
        src: p2,
        id: 2,
    },
    {
        src: p3,
        id: 3,
    },
    {
        src: p4,
        id: 4,
    },
]

export const Works = () => {
    return (
        <SW.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <FlexContainer justify={"center"} align={"flex-start"} wrap={"wrap"}>
                    {worksData.map((w) => {
                        return (

                            <Work
                                src={w.src}
                                key={w.id}/>
                        )
                    })}
                </FlexContainer>
            </Container>
        </SW.Works>
    );
};



