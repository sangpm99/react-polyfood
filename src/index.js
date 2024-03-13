import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import {CartContextProvider, MailContextProvider, UserContextProvider} from "./contexts";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle>
                <CartContextProvider>
                    <UserContextProvider>
                        <MailContextProvider>
                            <App/>
                        </MailContextProvider>
                    </UserContextProvider>
                </CartContextProvider>
            </GlobalStyle>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
