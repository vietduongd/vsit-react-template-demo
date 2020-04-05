import { ConfigProvider } from "antd";
import 'antd/dist/antd.css';
import viVN from 'antd/es/locale/vi_VN';
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import i18n from './config/i18n';
import './assets/index.css';

ReactDOM.render(
    <I18nextProvider i18n={i18n} >
        <ConfigProvider locale={viVN}>
            <Router>
                <App />
            </Router>
        </ConfigProvider>
    </I18nextProvider>,
    document.getElementById('root')
);
