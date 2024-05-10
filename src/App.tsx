import "./App.css";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Works} from "./layout/sections/works/Works";
import {Contact} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
// import {Particle} from "./components/particle/Particle";
import {GoTopBtn} from "./components/gotopbtn/Gotopbtn";



function App() {
    return (
        <div className="App">
            {/*<Particle/>*/}
            <Header/>
            <Main/>
            <Works/>
            <Contact/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;
