import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-width: 360px;
        background-color: ${Theme.colors.primaryBg};
        margin: 0;
        //Подключаем шрифты
        font-family: "Manrope", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    //убираем подчёркнутые ссылки
    a {
        text-decoration: unset;
        color: ${Theme.colors.font};
        cursor: pointer;
    }

    //убираем точки в списках
    ul {
        list-style: none;
    }
    //убираем default browser фон кнопок
    button {
        background-color: unset;
        border: none;
        //курсор при наведении
        cursor: pointer;
        color: ${Theme.colors.buttonBg};
    }
    

    h3 {
        font-family: Manrope, sans-serif;
        font-size: 16px;
        font-weight: 700;

        letter-spacing: 1px;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        font-family: Manrope, sans-serif;
        line-height: 1.4;
    }
`
