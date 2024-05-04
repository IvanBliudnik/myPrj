import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexContainer} from "../../../components/FlexContainer";
import {Work} from "./work/Work";
import p1 from "./../../../assets/images/p1.png"
import p2 from "./../../../assets/images/p2.png"
import p3 from "./../../../assets/images/p3.png"
import p4 from "./../../../assets/images/p4.png"
import {Container} from "../../../components/Container";
import {SW} from "./work/WorksStyles"
import {TabsStatusType} from "./tabMenu/TabMenu";
import {AnimatePresence, motion} from "framer-motion"



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
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData


    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <SW.Works id={"works"}>
            <Container>
                <SectionTitle>Featured work</SectionTitle>
                <FlexContainer justify={"center"} align={"flex-start"} wrap={"wrap"}>
                    <AnimatePresence>
                        {worksData.map((w) => {
                            return (
                                <motion.div style={{width: "auto", flexGrow:1, maxWidth:"612px"}}
                                    layout
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={w.id}
                                >
                                    <Work
                                          src={w.src}
                                          key={w.id}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexContainer>
            </Container>
        </SW.Works>
    );
};



