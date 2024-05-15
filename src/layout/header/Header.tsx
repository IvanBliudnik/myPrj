import {Logo} from "../../components/logo/logo";
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import React from "react";
import {S} from "./Header_Styles"


export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (
        <S.Header >
            <Container>
                    <S.HeaderContainer align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <Logo/>

                    {width < breakpoint ? <MobileMenu />
                                        : <DesktopMenu />}
                    </S.HeaderContainer>
            </Container>
        </S.Header>
    );
};

